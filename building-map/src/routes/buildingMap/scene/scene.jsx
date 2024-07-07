import { FloorCeiling, Walls, Map } from "./floorComponents.jsx";
import Controls from "./controls.jsx";
import Locations from "./locations.jsx";
import getFloorYPosFromIndex from "./getFloorYPosFromIndex.jsx";
import * as THREE from "three";
import { useMemo, useRef, useLayoutEffect, Suspense } from "react";

import { Canvas, useLoader } from "@react-three/fiber";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

import { useFloors } from "../../../hooks/api/useFloors.jsx";
import { useLocations } from "../../../hooks/api/useLocations.jsx";
import { ErrorBoundary } from "react-error-boundary";

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
  buildingName,
  yPos,
  floor,
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
  }, [paths, floor]);

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

  // Add offset and vertical position
  const ref = useRef();
  useLayoutEffect(() => {
    ref.current.position.set(floor.position[0], yPos, -1 * floor.position[1]);
  }, [floor.position]);

  // Only render if paths variable has contents
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
      {floor.floorLayer.length > 0 ? (
        <FloorCeiling
          outlinePaths={outlinePaths}
          floor={floor}
          selected={selected}
        />
      ) : null}
      <Locations
        buildingName={buildingName}
        floor={floor}
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
  buildingName,
  selectedFloor,
  selectedLocation,
  setSelectedLocation,
}) {
  const { floors } = useFloors(buildingName);

  // Map floors to Floor components
  return (
    <>
      {floors.map((floor, index) => {
        const displayFloor = floor.svg.length > 0;
        // Only display if floor is selected or no floor is selected
        return displayFloor ? (
          <Floor
            key={floor.name}
            buildingName={buildingName}
            yPos={getFloorYPosFromIndex(floors, index)}
            floor={floor}
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
        ) : null;
      })}
    </>
  );
}

export default function Scene({
  buildingName,
  selectedFloor,
  selectedLocation,
  setSelectedLocation,
}) {
  const { floors } = useFloors(buildingName);
  const { locations } = useLocations(buildingName);

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
          buildingName={buildingName}
          selectedFloor={selectedFloor}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </Canvas>
    </div>
  );
}
