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

export default function BuildingMap() {
  const [buildingProps, setBuildingProps] = useState(floorData);
  const [locations, setLocations] = useState(locationData);

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

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
