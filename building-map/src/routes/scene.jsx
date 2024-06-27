import * as THREE from "three";
import { useState, useMemo, useRef, useLayoutEffect } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function FloorOutline({ position = [0, 0, 0], paths, floorProps }) {
  const [shapePaths, strokePaths] = useMemo(() => {
    let shapePaths = [];
    let strokePaths = [];

    paths.forEach((path) => {
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
  }, [paths]);

  const geometries = useMemo(() => {
    let geometries = [];

    shapePaths.map((path) => {
      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        geometries.push(new THREE.ShapeGeometry(shape).toNonIndexed());
      });
    });

    strokePaths.forEach((path) => {
      path.subPaths.forEach((subPath) => {
        geometries.push(
          SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style)
        );
      });
    });

    return geometries;
  }, [shapePaths, strokePaths]);

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

function Walls({ position = [0, 0, 0], paths, floorProps }) {
  const [shapePaths, strokePaths] = useMemo(() => {
    let shapePaths = [];
    let strokePaths = [];

    paths.forEach((path) => {
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
  }, [paths]);

  const shapeGeometries = useMemo(() => {
    let shapeGeometries = [];

    shapePaths.map((path) => {
      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        shapeGeometries.push(new THREE.ShapeGeometry(shape).toNonIndexed());
      });
    });

    strokePaths.forEach((path) => {
      path.subPaths.forEach((subPath) => {
        shapeGeometries.push(
          SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style)
        );
      });
    });

    return shapeGeometries;
  }, [shapePaths, strokePaths]);

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
      <mesh
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
      <mesh
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
      <mesh
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
  const [shapePaths, strokePaths] = useMemo(() => {
    let shapePaths = [];
    let strokePaths = [];

    paths.forEach((path) => {
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
  }, [paths]);

  const geometries = useMemo(() => {
    let geometries = [];

    shapePaths.map((path) => {
      const shapes = SVGLoader.createShapes(path);
      shapes.forEach((shape) => {
        geometries.push(new THREE.ShapeGeometry(shape).toNonIndexed());
      });
    });

    strokePaths.forEach((path) => {
      path.subPaths.forEach((subPath) => {
        geometries.push(
          SVGLoader.pointsToStroke(subPath.getPoints(), path.userData.style)
        );
      });
    });

    return geometries;
  }, [shapePaths, strokePaths]);

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
      <meshStandardMaterial color={0x000000} side={THREE.DoubleSide} />
    </mesh>
  );
}

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

function Floor({ yPos, floorProps }) {
  const { paths } = useLoader(SVGLoader, floorProps.svg);

  const groupedPaths = useMemo(() => {
    return groupPaths(paths);
  }, [paths]);

  const [mapPaths, wallPaths, outlinePaths] = useMemo(() => {
    let mapPaths = [],
      wallPaths = [],
      outlinePaths = [];

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

  const ref = useRef();
  useLayoutEffect(() => {
    const sphere = new THREE.Box3()
      .setFromObject(ref.current)
      .getBoundingSphere(new THREE.Sphere());
    ref.current.position.set(
      -sphere.center.x + floorProps.position[0],
      yPos,
      -sphere.center.z - floorProps.position[1]
    );
  });

  return (
    <group ref={ref}>
      <Map
        position={[0, floorProps.verticalGap, 0]}
        paths={mapPaths}
        floorProps={floorProps}
      />
      {floorProps.extrudedSections.length > 0 && floorProps.extrudeDepth > 0 ? (
        <Walls
          position={[0, floorProps.verticalGap, 0]}
          paths={wallPaths}
          floorProps={floorProps}
        />
      ) : null}
      {floorProps.floorLayer.layer !== undefined &&
      floorProps.floorLayer.enabled ? (
        <>
          <FloorOutline paths={outlinePaths} floorProps={floorProps} />
          {floorProps.extrudeDepth > 0 ? (
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
    </group>
  );
}

function Building({ buildingProps }) {
  function getYPosFromIndex(index) {
    let height = 0;
    for (let i = 0; i < index; i++) {
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

  return (
    <>
      {buildingProps.slice(0, 5).map((floorProps, index) => {
        return (
          <Floor
            yPos={getYPosFromIndex(index)}
            key={floorProps.name}
            floorProps={floorProps}
          />
        );
      })}
    </>
  );
}

export default function Scene({ buildingProps }) {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 500,
        }}
      >
        <OrbitControls makeDefault />
        <directionalLight args={[0xffffff, 2.5]} position={[-1, 2, 4]} />
        <ambientLight args={[0xcfe2e3]} />
        <Building buildingProps={buildingProps} />
      </Canvas>
    </div>
  );
}
