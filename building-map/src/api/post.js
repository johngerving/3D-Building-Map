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
      name: "Untitled Floor",
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

    // Add empty locations array to db
    locationData[floorID] = [];

    // Return response
    res.data = newFloor;
    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};

export const postLocation = async (data) => {
  try {
    const res = {};

    // Get location ID by getting the number of locations already existing
    const locationID = locationData.length;

    // Create new location object
    const newLocation = {
      locationID: locationID,
      floorID: data.floorID,
      buildingName: data.buildingName,
      name: "Untitled",
      description: "",
      position: [0, 0],
      type: "",
    };

    // Add location to db
    locationData.push(newLocation);

    // Return response
    res.data = newLocation;
    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};
