import Scene from "./scene.jsx";
import { useState } from "react";
import { buildingPropertiesData } from "../assets/buildingProperties.js";

export default function Root() {
  const [buildingProps, setBuildingProps] = useState(buildingPropertiesData);
  return (
    <>
      <Scene buildingProps={buildingProps} />
    </>
  );
}
