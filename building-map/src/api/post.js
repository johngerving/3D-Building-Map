import {
  buildingData,
  floorData,
  locationData,
} from "../assets/buildingProperties.js";

/* Mock POST API Calls */

// Simulate API response time
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Add new floor
export const postFloor = async (data) => {
  try {
    const res = {};

    // Get new floor ID from the length of the floors array
    const floorID = (floorData.length + 1).toString();

    // Get index of new floor by counting the number of floors already existing
    const index = floorData.reduce(
      (acc, cur) => (cur.buildingName === data.buildingName ? ++acc : acc),
      0
    );

    // Create new floor object
    const newFloor = {
      floorID: floorID,
      buildingName: data.buildingName,
      index: index,
      name: "",
      svg: "",
      scale: 1,
      verticalGap: 0,
      position: [0, 0],
      extrudedSections: [],
      floorLayer: "",
      excludedSections: [],
      extrudeDepth: 0,
    };

    // Add floor to db
    floorData.push(newFloor);

    // Return response
    res.data = newFloor;
    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};
