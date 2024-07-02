import Scene from "./scene/scene.jsx";
import SearchBar from "./ui/searchBar.jsx";
import FloorSelect from "./ui/floorSelect.jsx";
import SideBar from "./ui/sideBar.jsx";
import { useState } from "react";
import {
  buildingData,
  floorData,
  locationData,
} from "../../assets/buildingProperties.js";
import { Stats } from "@react-three/drei";

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

  // Make a query for floor data
  const floorQuery = useQuery({
    queryKey: ["floors"],
    queryFn: () =>
      getFloorsByBuildingName("library").then((res) => {
        return res.data;
      }),
  });
  // Make a query for location data
  const locationQuery = useQuery({
    queryKey: ["locations"],
    queryFn: () =>
      getLocationsByBuildingName("library").then((res) => {
        return res.data;
      }),
  });

  // Grab the data from the query
  const buildingProps = floorQuery.data;
  const locations = locationQuery.data;

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  if (floorQuery.isPending || locationQuery.isPending) return <LoadingScreen />;

  if (floorQuery.error)
    return "An error has occurred: " + floorQuery.error.message;
  if (locationQuery.error)
    return "An error has occurred: " + locationQuery.error.message;

  return (
    <>
      {/* <Stats showPanel={0} className="stats" /> */}
      <SearchBar
        locations={locations}
        buildingProps={buildingProps}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        setSelectedFloor={setSelectedFloor}
      />
      <SideBar selectedLocation={selectedLocation} />
      <FloorSelect
        buildingProps={buildingProps}
        selectedFloor={selectedFloor}
        setSelectedFloor={setSelectedFloor}
      ></FloorSelect>
      <Scene
        buildingProps={buildingProps}
        locations={locations}
        selectedFloor={selectedFloor}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </>
  );
}
