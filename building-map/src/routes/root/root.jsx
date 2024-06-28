import Scene from "./scene/scene.jsx";
import SearchBar from "./ui/searchBar.jsx";
import FloorSelect from "./ui/floorSelect.jsx";
import { useState } from "react";
import { buildingPropertiesData } from "../../assets/buildingProperties.js";

export default function Root() {
  const [buildingProps, setBuildingProps] = useState(buildingPropertiesData);
  return (
    <>
      <SearchBar />
      <FloorSelect buildingProps={buildingProps}></FloorSelect>
      <Scene buildingProps={buildingProps} />
    </>
  );
}
