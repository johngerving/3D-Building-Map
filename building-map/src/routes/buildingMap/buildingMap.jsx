import Scene from "./scene/scene.jsx";
import { ViewPanel } from "./ui/viewPanel.jsx";
import FloorSelect from "./ui/floorSelect.jsx";
import { useState, Suspense } from "react";
import { Stats } from "@react-three/drei";

import { useLoaderData, Outlet } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { useFloors } from "../../hooks/api/useFloors.jsx";
import { useLocations } from "../../hooks/api/useLocations.jsx";

export const loader = async ({ params }) => {
  return await params.buildingName;
};

function LoadingScreen() {
  return (
    <div
      id="loading"
      style={{
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(207,226,227,1) 93%, rgba(205,205,205,1) 100%)",
      }}
    />
  );
}

export default function BuildingMap() {
  const queryClient = useQueryClient();

  const buildingName = useLoaderData();

  const { isFloorPending, isFloorError, floors, floorError } =
    useFloors(buildingName);
  const { isLocationPending, isLocationError, locations, locationError } =
    useLocations(buildingName);

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  if (isFloorPending || isLocationPending) return <LoadingScreen />;

  if (isFloorError || isLocationError)
    return (
      <>
        {isFloorError ? <p>Error: {floorError}</p> : null}
        {isLocationError ? <p>Error: {locationError}</p> : null}
      </>
    );

  return (
    <>
      {/* <Stats showPanel={0} className="stats" /> */}
      {floors && locations ? (
        <>
          <Outlet
            context={[
              buildingName,
              selectedLocation,
              setSelectedLocation,
              setSelectedFloor,
            ]}
          />
          <FloorSelect
            buildingName={buildingName}
            selectedFloor={selectedFloor}
            setSelectedFloor={setSelectedFloor}
          ></FloorSelect>
          <Scene
            buildingName={buildingName}
            selectedFloor={selectedFloor}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </>
      ) : null}
    </>
  );
}
