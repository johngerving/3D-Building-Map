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
  floor,
  locations,
  selected,
  selectedFloor,
  visible,
  selectedLocation,
  setSelectedLocation,
}) {
  const { paths } = useLoader(SVGLoader, floor.svg); // Get paths from SVG

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
      if (floor.extrudedSections.includes(group)) {
        wallPaths = wallPaths.concat(groupedPaths[group]);
      } else if (floor.floorLayer != null && floor.floorLayer == group) {
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
      center.x + floor.position[0],
      yPos,
      center.z - floor.position[1]
    );
  }, [floor.position]);

  return (
    <group ref={ref} visible={visible}>
      <Map
        position={[0, floor.verticalGap, 0]}
        paths={mapPaths}
        floor={floor}
      />
      {/* Only add walls if extruded section exists */}
      {floor.extrudedSections.length > 0 && floor.extrudeDepth > 0 ? (
        <Walls
          position={[0, floor.verticalGap, 0]}
          paths={wallPaths}
          floor={floor}
        />
      ) : null}
      <FloorCeiling
        outlinePaths={outlinePaths}
        floor={floor}
        selected={selected}
      />
      <Locations
        floor={floor}
        locations={locations}
        selectedFloor={selectedFloor}
        visible={
          (selectedFloor != null && selectedFloor.floorID == floor.floorID) ||
          selectedFloor == null
        }
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </group>
  );
}

function Building({
  floors,
  locations,
  selectedFloor,
  selectedLocation,
  setSelectedLocation,
}) {
  // Map floors to Floor components
  return (
    <>
      {floors.map((floor, index) => {
        // Only display if floor is selected or no floor is selected
        return (
          <Floor
            yPos={getFloorYPosFromIndex(floors, index)}
            key={floor.name}
            floor={floor}
            locations={locations}
            selectedFloor={selectedFloor}
            selected={
              selectedFloor != null && floor.floorID == selectedFloor.floorID
            }
            visible={
              selectedFloor == null || floor.floorID == selectedFloor.floorID
            }
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        );
      })}
    </>
  );
}

export default function Scene({
  floors,
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
          floors={floors}
          selectedFloor={selectedFloor}
        />
        <directionalLight args={[0xffffff, 2.5]} position={[-1, 2, 4]} />
        <ambientLight args={[0xcfe2e3]} />
        <Building
          floors={floors}
          locations={locations}
          selectedFloor={selectedFloor}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </Canvas>
    </div>
  );
}
