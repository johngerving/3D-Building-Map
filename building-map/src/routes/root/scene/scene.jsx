import * as THREE from "three";
import { useState, useMemo, useRef, useLayoutEffect, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { OrbitControls } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";

// Given an array of paths, return an array of two arrays, one containing shape paths and the other containing stroke paths
function separatePathsIntoShapeAndStroke(paths) {
  let shapePaths = [];
  let strokePaths = [];

  paths.forEach((path) => {
    // Use fillColor and strokeColor properties to determine if path should be pushed to shapePaths, strokePaths, or both
    const fillColor = path.userData.style.fill;
    const strokeColor = path.userData.style.stroke;

    if (fillColor !== undefined && fillColor !== "none") {
      shapePaths.push(path);
    }
    if (strokeColor !== undefined && strokeColor !== "none") {
      strokePaths.push(path);
    }
  });

  return [shapePaths, strokePaths];
}

// Given two arrays, shapePaths, and strokePaths, return an array of geometries created from the shapes and strokes
function getGeometriesFromShapeAndStroke(shapePaths, strokePaths) {
  let geometries = [];

  shapePaths.map((path) => {
    const shapes = SVGLoader.createShapes(path);
    shapes.forEach((shape) => {
      // Create a new ShapeGeometry with createShapes and push to geometries array
      geometries.push(new THREE.ShapeGeometry(shape).toNonIndexed());
    });
  });

  strokePaths.forEach((path) => {
    path.subPaths.forEach((subPath) => {
      // Create buffer geometry from subpath with pointsToStroke and push to geometries array
      geometries.push(
        SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style)
      );
    });
  });

  return geometries;
}

function FloorOutline({ position = [0, 0, 0], paths, floorProps }) {
  // Separate floor outline into shape paths and stroke paths
  const [shapePaths, strokePaths] = useMemo(
    () => separatePathsIntoShapeAndStroke(paths),
    [paths]
  );

  // Get geometries from shapes and strokes
  const geometries = useMemo(
    () => getGeometriesFromShapeAndStroke(shapePaths, strokePaths),
    [shapePaths, strokePaths]
  );

  // Merge the geometries
  const mergedGeometry = useMemo(() => {
    const merged = BufferGeometryUtils.mergeGeometries(geometries);
    merged.computeBoundingSphere();
    return merged;
  }, [geometries]);

  return (
    <mesh
      position={position}
      scale={[
        floorProps.svgScale,
        -1 * floorProps.svgScale,
        floorProps.svgScale,
      ]}
      rotation-x={-Math.PI / 2}
      geometry={mergedGeometry}
    >
      <meshPhongMaterial side={THREE.DoubleSide} />
    </mesh>
  );
}

function FloorCeiling({ outlinePaths, floorProps, selected }) {
  return (
    <>
      {/* Draw floor and ceiling if property is enabled */}
      {floorProps.floorLayer.layer !== undefined &&
      floorProps.floorLayer.enabled ? (
        <>
          {/* Lower floor outline */}
          <FloorOutline paths={outlinePaths} floorProps={floorProps} />
          {/* Only draw upper floor outline if floor is extruded, don't draw if selected */}
          {floorProps.extrudeDepth > 0 && !selected ? (
            <FloorOutline
              position={[
                0,
                floorProps.extrudeDepth * floorProps.svgScale +
                  floorProps.verticalGap * 2,
                0,
              ]}
              paths={outlinePaths}
              floorProps={floorProps}
            />
          ) : null}
        </>
      ) : null}
    </>
  );
}

function Walls({ position = [0, 0, 0], paths, floorProps }) {
  // Separate paths into shape paths and stroke paths
  const [shapePaths, strokePaths] = useMemo(
    () => separatePathsIntoShapeAndStroke(paths),
    [paths]
  );

  // Make array of geometries for outline of walls
  const shapeGeometries = useMemo(
    () => getGeometriesFromShapeAndStroke(shapePaths, strokePaths),
    [shapePaths, strokePaths]
  );

  // Make array of geometries for extruded walls
  const extrudeGeometries = useMemo(() => {
    let extrudeGeometries = [];
    paths.map((path) => {
      const shapes = SVGLoader.createShapes(path);

      shapes.forEach((shape) => {
        const extrudeGeometry = new THREE.ExtrudeGeometry(shape, {
          depth: floorProps.extrudeDepth,
          bevelEnabled: false,
        });
        extrudeGeometry.computeVertexNormals();
        extrudeGeometries.push(extrudeGeometry);
      });
    });
    return extrudeGeometries;
  }, [paths]);

  // Merge shape and extruded wall geometries into two geometries
  const mergedShapeGeometry = useMemo(() => {
    const merged = BufferGeometryUtils.mergeGeometries(shapeGeometries);
    merged.computeBoundingSphere();
    return merged;
  }, [shapeGeometries]);

  const mergedExtrudeGeometry = useMemo(() => {
    const merged = BufferGeometryUtils.mergeGeometries(extrudeGeometries);
    merged.computeBoundingSphere();
    return merged;
  }, [extrudeGeometries]);

  return (
    <>
      {/* Lower floor wall outline */}
      <mesh
        // Add gap to lower shape to be above outline plane
        position={[0, floorProps.verticalGap, 0]}
        scale={[
          floorProps.svgScale,
          -1 * floorProps.svgScale,
          floorProps.svgScale,
        ]}
        rotation-x={-Math.PI / 2}
        geometry={mergedShapeGeometry}
      >
        <meshStandardMaterial color={0x000000} side={THREE.DoubleSide} />
      </mesh>
      {/* Upper floor wall outline */}
      <mesh
        // Move upper shape up by extrude depth plus gap
        position={[
          0,
          floorProps.extrudeDepth * floorProps.svgScale +
            floorProps.verticalGap * 2.5,
          0,
        ]}
        scale={[
          floorProps.svgScale,
          -1 * floorProps.svgScale,
          floorProps.svgScale,
        ]}
        rotation-x={-Math.PI / 2}
        geometry={mergedShapeGeometry}
      >
        <meshStandardMaterial color={0x000000} side={THREE.DoubleSide} />
      </mesh>
      {/* Extruded walls */}
      <mesh
        // Move walls up by gap
        position={[0, floorProps.verticalGap * 1.5, 0]}
        scale={[
          floorProps.svgScale,
          -1 * floorProps.svgScale,
          floorProps.svgScale,
        ]}
        rotation-x={-Math.PI / 2}
        geometry={mergedExtrudeGeometry}
        renderOrder={-1}
      >
        <meshPhongMaterial transparent opacity={0.5} />
      </mesh>
    </>
  );
}

function Map({ position = [0, 0, 0], paths, floorProps }) {
  // Separate paths into shape paths and stroke paths based on fill and stroke properties
  const [shapePaths, strokePaths] = useMemo(
    () => separatePathsIntoShapeAndStroke(paths),
    [paths]
  );

  // Create geometries for map, store in one single array
  const geometries = useMemo(
    () => getGeometriesFromShapeAndStroke(shapePaths, strokePaths),
    [shapePaths, strokePaths]
  );

  // Merge array of geometries for performance
  const mergedGeometry = useMemo(() => {
    const merged = BufferGeometryUtils.mergeGeometries(geometries);
    merged.computeBoundingSphere();
    return merged;
  }, [geometries]);

  return (
    <mesh
      position={position}
      // Scale properly
      scale={[
        floorProps.svgScale,
        -1 * floorProps.svgScale,
        floorProps.svgScale,
      ]}
      // Rotate to be horizontal
      rotation-x={-Math.PI / 2}
      geometry={mergedGeometry}
    >
      <meshStandardMaterial color={0x000000} side={THREE.DoubleSide} />
    </mesh>
  );
}

// Function that takes in array of paths and adds them to a dictionary grouped by the ID of their parent
function groupPaths(paths) {
  let groupedPaths = {};
  paths.forEach((path) => {
    if (!groupedPaths[path.userData.node.parentElement.parentElement.id]) {
      groupedPaths[path.userData.node.parentElement.parentElement.id] = [];
    }
    groupedPaths[path.userData.node.parentElement.parentElement.id].push(path);
  });
  return groupedPaths;
}

function Floor({ yPos, floorProps, selected }) {
  const { paths } = useLoader(SVGLoader, floorProps.svg); // Get paths from SVG

  // Group paths by parent ID
  const groupedPaths = useMemo(() => {
    return groupPaths(paths);
  }, [paths]);

  // Separate paths into three arrays
  const [mapPaths, wallPaths, outlinePaths] = useMemo(() => {
    let mapPaths = [],
      wallPaths = [],
      outlinePaths = [];

    // For each parent ID group in paths, add to wall, outline, or map paths array
    for (const group in groupedPaths) {
      if (floorProps.extrudedSections.includes(group)) {
        wallPaths = wallPaths.concat(groupedPaths[group]);
      } else if (
        floorProps.floorLayer.layer.length > 0 &&
        floorProps.floorLayer.layer == group
      ) {
        outlinePaths = outlinePaths.concat(groupedPaths[group]);
      } else {
        mapPaths = mapPaths.concat(groupedPaths[group]);
      }
    }

    return [mapPaths, wallPaths, outlinePaths];
  }, [groupedPaths]);

  // Center floor group, add offset, and add vertical position
  const ref = useRef();
  let center = {};

  useLayoutEffect(() => {
    const sphere = new THREE.Box3()
      .setFromObject(ref.current)
      .getBoundingSphere(new THREE.Sphere());
    ref.current.position.set(-sphere.center.x, yPos, -sphere.center.z);
    center = {
      x: -sphere.center.x,
      z: -sphere.center.z,
    };
  }, []);

  useLayoutEffect(() => {
    ref.current.position.set(
      center.x + floorProps.position[0],
      yPos,
      center.z - floorProps.position[1]
    );
  }, [floorProps.position]);

  return (
    <group ref={ref}>
      <Map
        position={[0, floorProps.verticalGap, 0]}
        paths={mapPaths}
        floorProps={floorProps}
      />
      {/* Only add walls if extruded section exists */}
      {floorProps.extrudedSections.length > 0 && floorProps.extrudeDepth > 0 ? (
        <Walls
          position={[0, floorProps.verticalGap, 0]}
          paths={wallPaths}
          floorProps={floorProps}
        />
      ) : null}
      <FloorCeiling
        outlinePaths={outlinePaths}
        floorProps={floorProps}
        selected={selected}
      />
    </group>
  );
}

// Given an index for a floor in the building, return the height of the floor by summing the heights of the previous floors
function getFloorYPosFromIndex(buildingProps, index) {
  let height = 0;
  // Loop through floors before index
  for (let i = 0; i < index; i++) {
    // If floor is extruded, add height of floor plus gaps in between layers
    if (
      buildingProps[i].extrudedSections.length > 0 &&
      buildingProps[i].extrudeDepth > 0
    ) {
      height +=
        buildingProps[i].extrudeDepth * buildingProps[i].svgScale +
        buildingProps[i].verticalGap * 3;
    }
  }
  return height;
}

function Building({ buildingProps, selectedFloorIndex }) {
  // Map buildingProps to Floor components
  return (
    <>
      {buildingProps.map((floorProps, index) => {
        // Only display if floor is selected or no floor is selected
        if (index == selectedFloorIndex || selectedFloorIndex == null) {
          return (
            <Floor
              yPos={getFloorYPosFromIndex(buildingProps, index)}
              key={floorProps.name}
              floorProps={floorProps}
              selected={index == selectedFloorIndex}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
}

function Controls({
  initialPosition,
  zoomMultiplier,
  buildingProps,
  selectedFloorIndex,
}) {
  // Get reference to OrbitControls
  const controlsRef = useRef();

  // Animation at start of application - zoom in
  useSpring(() => ({
    // Start zoomed out
    from: {
      x: initialPosition[0] * zoomMultiplier,
      y: initialPosition[1] * zoomMultiplier,
      z: initialPosition[2] * zoomMultiplier,
    },
    // End at default position
    to: {
      x: initialPosition[0],
      y: initialPosition[1],
      z: initialPosition[2],
    },
    config: {
      precision: 0.01,
    },
    // Disable OrbitControls at start of animation
    onStart: () => {
      controlsRef.current.enabled = false;
    },
    // Update position of orbitcontrols
    onChange: (props) => {
      controlsRef.current.object.position.x = props.value.x;
      controlsRef.current.object.position.y = props.value.y;
      controlsRef.current.object.position.z = props.value.z;
      controlsRef.current.update();
    },
    // Enable OrbitControls at end of animation
    onRest: () => {
      controlsRef.current.enabled = true;
    },
  }));

  const [cameraPos, api] = useSpring(() => ({
    from: {
      radius: 0,
      phi: 0,
      theta: 0,
      height: 0,
    },
  }));

  useEffect(() => {
    if (selectedFloorIndex != null) {
      const floorHeight = getFloorYPosFromIndex(
        buildingProps,
        selectedFloorIndex
      );

      // Get distance from camera to selected floor and convert to spherical coordinates
      const initialSpherical = new THREE.Spherical().setFromCartesianCoords(
        controlsRef.current.object.position.x,
        controlsRef.current.object.position.y - floorHeight,
        controlsRef.current.object.position.z
      );

      // Convert default position to spherical coordinates
      const defaultPositionToSpherical =
        new THREE.Spherical().setFromCartesianCoords(
          initialPosition[0],
          initialPosition[1],
          initialPosition[2]
        );

      api.start(() => ({
        from: {
          // Set spherical coordinates to initial camera spherical coordinates
          radius: initialSpherical.radius,
          phi: initialSpherical.phi,
          theta: initialSpherical.theta,
          height: controlsRef.current.target.y,
        },
        to: {
          // Animate to be centered around selected floor
          radius: defaultPositionToSpherical.radius,
          phi: defaultPositionToSpherical.phi,
          theta: initialSpherical.theta, // Rotation around y axis stays the same
          height: floorHeight,
        },
        config: {
          precision: 0.01, // Lower value keeps animation from jumping
        },
        // Disable OrbitControls at start of animation
        onStart: () => {
          controlsRef.current.enabled = false;
        },
        // Update position of orbitcontrols
        onChange: (props) => {
          // Convert current spherical coordinates to Vector3
          const spherical = new THREE.Spherical(
            props.value.radius,
            props.value.phi,
            props.value.theta
          );
          const position = new THREE.Vector3().setFromSpherical(spherical);

          // Add height of floor to camera position
          position.y += props.value.height;

          // Set camera position to current animated position
          controlsRef.current.object.position.x = position.x;
          controlsRef.current.object.position.y = position.y;
          controlsRef.current.object.position.z = position.z;

          // Set target that camera looks at to the floor height
          controlsRef.current.target = new THREE.Vector3(
            0,
            props.value.height,
            0
          );

          controlsRef.current.update();
        },
        // Enable OrbitControls at end of animation
        onRest: () => {
          controlsRef.current.enabled = true;
        },
      }));
    }
  }, [selectedFloorIndex]);

  return <OrbitControls ref={controlsRef} target={[0, 0, 0]} />;
}

export default function Scene({ buildingProps, selectedFloorIndex }) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(207,226,227,1) 93%, rgba(205,205,205,1) 100%)",
      }}
    >
      {/* Fill entire screen */}
      <Canvas>
        <Controls
          initialPosition={[0, 3, 5]}
          zoomMultiplier={75}
          buildingProps={buildingProps}
          selectedFloorIndex={selectedFloorIndex}
        />
        <directionalLight args={[0xffffff, 2.5]} position={[-1, 2, 4]} />
        <ambientLight args={[0xcfe2e3]} />
        <Building
          buildingProps={buildingProps}
          selectedFloorIndex={selectedFloorIndex}
        />
      </Canvas>
    </div>
  );
}
