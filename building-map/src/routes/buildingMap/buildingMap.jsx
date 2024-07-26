import Scene from "./scene/scene.jsx";
import { ViewPanel } from "./ui/viewPanel.jsx";
import FloorSelect from "./ui/floorSelect.jsx";
import { useState, Suspense, useEffect } from "react";
import { Stats } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";

import { useLoaderData, Outlet } from "react-router-dom";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";

import { useFloors } from "../../hooks/api/useFloors.jsx";
import { useLocations } from "../../hooks/api/useLocations.jsx";
import { useBuilding } from "../../hooks/api/useBuilding.jsx";

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

function SceneFallback({ error, resetErrorBoundary = null }) {
  return (
    <div
      className="flex justify-center w-screen h-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(207,226,227,1) 93%, rgba(205,205,205,1) 100%)",
      }}
      id="error-page"
    >
      <div className="m-auto text-center w-full">
        <h1 className="text-4xl mb-5">Oops!</h1>
        <p className="text-lg mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="m-auto mb-5 text-lg text-center w-3/4 text-wrap break-all">
          <i>{error.message}</i>
        </p>
        {resetErrorBoundary ? (
          <button
            onClick={resetErrorBoundary}
            className="bg-blue-600 rounded-md shadow-sm text-white p-3"
          >
            Try Again
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default function BuildingMap() {
  const queryClient = useQueryClient();

  const buildingName = useLoaderData();

  const { isBuildingPending, isBuildingError, building, buildingError } =
    useBuilding(buildingName);

  const { isFloorPending, isFloorError, floors, floorError } = useFloors(
    !!building ? building.buildingID : null,
    !!building
  );
  const { isLocationPending, isLocationError, locations, locationError } =
    useLocations(!!building ? building.buildingID : null, !!building);

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  if (isBuildingError || isFloorError || isLocationError) {
    return (
      <>
        <SceneFallback
          error={
            isBuildingError
              ? buildingError
              : isFloorError
              ? floorError
              : isLocationError
              ? locationError
              : null
          }
        />
        {/* {isBuildingError ? <p>Error: {buildingError.message}</p> : null}
        {isFloorError ? <p>Error: {floorError.message}</p> : null}
        {isLocationError ? <p>Error: {locationError.message}</p> : null} */}
      </>
    );
  }

  if (isBuildingPending || isFloorPending || isLocationPending)
    return <LoadingScreen />;

  return (
    <>
      {/* <Stats showPanel={0} className="stats" /> */}
      {!!floors && !!locations ? (
        <>
          <Outlet
            context={[
              building,
              selectedFloor,
              selectedLocation,
              setSelectedLocation,
              setSelectedFloor,
            ]}
          />
          <FloorSelect
            buildingID={building.buildingID}
            selectedFloor={selectedFloor}
            setSelectedFloor={setSelectedFloor}
          ></FloorSelect>
          <ErrorBoundary FallbackComponent={SceneFallback}>
            <Scene
              buildingName={building.buildingName}
              buildingID={building.buildingID}
              selectedFloor={selectedFloor}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              width="100vw"
              height="100vh"
            />
          </ErrorBoundary>
        </>
      ) : null}
    </>
  );
}
