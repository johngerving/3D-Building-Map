// Given an index for a floor in the building, return the height of the floor by summing the heights of the previous floors
export default function getFloorYPosFromIndex(buildingProps, index) {
  let height = 0;
  // Loop through floors before index
  for (let i = 0; i < index; i++) {
    // If floor is extruded, add height of floor plus gaps in between layers
    if (
      buildingProps[i].extrudedSections.length > 0 &&
      buildingProps[i].extrudeDepth > 0
    ) {
      height +=
        buildingProps[i].extrudeDepth * buildingProps[i].svgScale +
        buildingProps[i].verticalGap * 3;
    }
  }
  return height;
}
