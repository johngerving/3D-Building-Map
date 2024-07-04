import Scene from "./scene/scene.jsx";
import { ViewPanel } from "./ui/viewPanel.jsx";
import FloorSelect from "./ui/floorSelect.jsx";
import { useState, Suspense } from "react";
import {
  buildingData,
  floorData,
  locationData,
} from "../../assets/buildingProperties.js";
import { Stats } from "@react-three/drei";

import { useLoaderData, defer, Await, Outlet } from "react-router-dom";

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  getBuilding,
  getFloorsByBuildingName,
  getLocationsByBuildingName,
} from "../../api/get.js";

const floorQuery = (name) => ({
  queryKey: ["floors", name],
  queryFn: () =>
    getFloorsByBuildingName(name).then((res) => {
      return res.data;
    }),
});

const locationQuery = (name) => ({
  queryKey: ["locations", name],
  queryFn: () =>
    getLocationsByBuildingName(name).then((res) => {
      return res.data;
    }),
});

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const newFloorQuery = floorQuery(params.buildingName);
    const newLocationQuery = locationQuery(params.buildingName);

    const floors =
      queryClient.getQueryData(newFloorQuery.queryKey) ??
      queryClient.fetchQuery(newFloorQuery);
    const locations =
      queryClient.getQueryData(newLocationQuery.queryKey) ??
      queryClient.fetchQuery(newLocationQuery);

    return defer({
      floors,
      locations,
    });
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

  const { floors, locations } = useLoaderData();

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  if (floorQuery.error)
    return "An error has occurred: " + floorQuery.error.message;
  if (locationQuery.error)
    return "An error has occurred: " + locationQuery.error.message;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Await resolve={floors} errorElement={<p>Error!</p>}>
        {(floors) => (
          <>
            {/* <Stats showPanel={0} className="stats" /> */}
            <Suspense>
              <Await resolve={locations} errorElement={<p>Error!</p>}>
                {(locations) => (
                  <>
                    <Outlet
                      context={[
                        floors,
                        locations,
                        selectedLocation,
                        setSelectedLocation,
                        setSelectedFloor,
                      ]}
                    />
                    <FloorSelect
                      floors={floors}
                      selectedFloor={selectedFloor}
                      setSelectedFloor={setSelectedFloor}
                    ></FloorSelect>
                  </>
                )}
              </Await>
            </Suspense>
            <Scene
              floors={floors}
              locations={locations}
              selectedFloor={selectedFloor}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </>
        )}
      </Await>
    </Suspense>
  );
}
