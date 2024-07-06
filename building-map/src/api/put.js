import {
  buildingData,
  floorData,
  locationData,
} from "../assets/buildingProperties.js";

/* Mock PUT API Calls */

// Simulate API response time
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Edit floor
export const putFloor = async (data) => {
  try {
    const res = {};

    // Find floor by ID
    const floorIndex = floorData.findIndex(
      (floor) => floor.floorID == data.floorID
    );
    // Return err if floor doesn't exist
    if (floorIndex == -1) return { err: "Floor not found" };

    // Make copy of old data
    const oldData = floorData[floorIndex];

    // Update db with new data
    floorData[floorIndex] = {
      floorID: oldData.floorID,
      buildingName: oldData.buildingName,
      name: data.name,
      svg: data.svg,
      scale: data.scale,
      verticalGap: data.verticalGap,
      position: data.position,
      extrudedSections: data.extrudedSections,
      floorLayer: data.floorLayer,
      excludedSections: data.excludedSections,
      extrudeDepth: data.extrudeDepth,
    };

    // Return the new data of floor
    res.data = floorData[floorIndex];
    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};