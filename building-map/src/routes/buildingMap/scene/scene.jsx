import { FloorCeiling, Walls, Map } from "./floorComponents.jsx";
import Controls from "./controls.jsx";
import Locations from "./locations.jsx";
import getFloorYPosFromIndex from "./getFloorYPosFromIndex.jsx";
import * as THREE from "three";
import { useMemo, useRef, useLayoutEffect, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

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

function Floor({
  yPos,
  floorProps,
  locations,
  selected,
  selectedFloor,
  visible,
  selectedLocation,
  setSelectedLocation,
}) {
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
    <group ref={ref} visible={visible}>
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
      <Locations
        floorProps={floorProps}
        locations={locations}
        selectedFloor={selectedFloor}
        visible={
          (selectedFloor != null && selectedFloor.id == floorProps.id) ||
          selectedFloor == null
        }
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </group>
  );
}

function Building({
  buildingProps,
  locations,
  selectedFloor,
  selectedLocation,
  setSelectedLocation,
}) {
  // Map buildingProps to Floor components
  return (
    <>
      {buildingProps.map((floorProps, index) => {
        // Only display if floor is selected or no floor is selected
        return (
          <Floor
            yPos={getFloorYPosFromIndex(buildingProps, index)}
            key={floorProps.name}
            floorProps={floorProps}
            locations={locations}
            selectedFloor={selectedFloor}
            selected={
              selectedFloor != null && floorProps.id == selectedFloor.id
            }
            visible={selectedFloor == null || floorProps.id == selectedFloor.id}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        );
      })}
    </>
  );
}

export default function Scene({
  buildingProps,
  locations,
  selectedFloor,
  selectedLocation,
  setSelectedLocation,
}) {
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
          selectedFloor={selectedFloor}
        />
        <directionalLight args={[0xffffff, 2.5]} position={[-1, 2, 4]} />
        <ambientLight args={[0xcfe2e3]} />
        <Building
          buildingProps={buildingProps}
          locations={locations}
          selectedFloor={selectedFloor}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </Canvas>
    </div>
  );
}
