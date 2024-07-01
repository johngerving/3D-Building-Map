import Scene from "./scene/scene.jsx";
import SearchBar from "./ui/searchBar.jsx";
import FloorSelect from "./ui/floorSelect.jsx";
import SideBar from "./ui/sideBar.jsx";
import { useState } from "react";
import {
  buildingPropertiesData,
  locationsData,
} from "../../assets/buildingProperties.js";
import { Stats } from "@react-three/drei";

export default function Root() {
  const [buildingProps, setBuildingProps] = useState(buildingPropertiesData);
  const [locations, setLocations] = useState(locationsData);

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
