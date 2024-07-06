import Scene from "./scene/scene.jsx";
import { ViewPanel } from "./ui/viewPanel.jsx";
import FloorSelect from "./ui/floorSelect.jsx";
import { useState, Suspense } from "react";
import { Stats } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";

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

function SceneFallback({ error, resetErrorBoundary }) {
  return (
    <div
      className="flex justify-center w-screen h-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(207,226,227,1) 93%, rgba(205,205,205,1) 100%)",
      }}
      id="error-page"
    >
      <div className="m-auto text-center">
        <h1 className="text-4xl mb-5">Oops!</h1>
        <p className="text-lg mb-4">Sorry, an unexpected error has occurred.</p>
        <p className="m-auto mb-5 text-lg text-center w-3/4 text-wrap break-all">
          <i>{error.message}</i>
        </p>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-600 rounded-md shadow-sm text-white p-3"
        >
          Try Again
        </button>
      </div>
    </div>
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
          <ErrorBoundary FallbackComponent={SceneFallback}>
            <Scene
              buildingName={buildingName}
              selectedFloor={selectedFloor}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </ErrorBoundary>
        </>
      ) : null}
    </>
  );
}
