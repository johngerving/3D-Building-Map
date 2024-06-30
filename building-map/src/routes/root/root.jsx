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

  const [selectedFloorIndex, setSelectedFloorIndex] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <>
      {/* <Stats showPanel={0} className="stats" /> */}
      <SearchBar />
      <SideBar selectedLocation={selectedLocation} />
      <FloorSelect
        buildingProps={buildingProps}
        selectedFloorIndex={selectedFloorIndex}
        setSelectedFloorIndex={setSelectedFloorIndex}
      ></FloorSelect>
      <div className="z-10 absolute top-2 right-2">
        <button
          onClick={() => {
            if (selectedLocation == null) {
              setSelectedLocation("test");
            } else {
              setSelectedLocation(null);
            }
          }}
          className="bg-black text-white"
        >
          Change
        </button>
      </div>
      <Scene
        buildingProps={buildingProps}
        locations={locations}
        selectedFloorIndex={selectedFloorIndex}
      />
    </>
  );
}
