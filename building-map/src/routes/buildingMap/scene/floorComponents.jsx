import * as THREE from "three";
import { useMemo } from "react";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";

const lineMat = new THREE.MeshStandardMaterial({
  color: "gray",
  side: THREE.DoubleSide,
});
const floorMat = new THREE.MeshPhongMaterial({
  side: THREE.DoubleSide,
});
const wallMat = new THREE.MeshPhongMaterial({
  transparent: true,
  opacity: 0.5,
});

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
      scale={[floorProps.scale, -1 * floorProps.scale, floorProps.scale]}
      rotation-x={-Math.PI / 2}
      material={floorMat}
      geometry={mergedGeometry}
    ></mesh>
  );
}

export function FloorCeiling({ outlinePaths, floorProps, selected }) {
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
                floorProps.extrudeDepth * floorProps.scale +
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

export function Walls({ position = [0, 0, 0], paths, floorProps }) {
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
        scale={[floorProps.scale, -1 * floorProps.scale, floorProps.scale]}
        rotation-x={-Math.PI / 2}
        material={lineMat}
        geometry={mergedShapeGeometry}
      ></mesh>
      {/* Upper floor wall outline */}
      <mesh
        // Move upper shape up by extrude depth plus gap
        position={[
          0,
          floorProps.extrudeDepth * floorProps.scale +
            floorProps.verticalGap * 2.5,
          0,
        ]}
        scale={[floorProps.scale, -1 * floorProps.scale, floorProps.scale]}
        rotation-x={-Math.PI / 2}
        material={lineMat}
        geometry={mergedShapeGeometry}
      ></mesh>
      {/* Extruded walls */}
      <mesh
        // Move walls up by gap
        position={[0, floorProps.verticalGap * 1.5, 0]}
        scale={[floorProps.scale, -1 * floorProps.scale, floorProps.scale]}
        rotation-x={-Math.PI / 2}
        material={wallMat}
        geometry={mergedExtrudeGeometry}
        renderOrder={-1}
      ></mesh>
    </>
  );
}

export function Map({ position = [0, 0, 0], paths, floorProps }) {
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
      scale={[floorProps.scale, -1 * floorProps.scale, floorProps.scale]}
      // Rotate to be horizontal
      rotation-x={-Math.PI / 2}
      material={lineMat}
      geometry={mergedGeometry}
    ></mesh>
  );
}
