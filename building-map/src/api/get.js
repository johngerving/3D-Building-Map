import {
  buildingData,
  floorData,
  locationData,
} from "../assets/buildingProperties.js";

/* Mock API Calls */

// Simulate API response time
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Get building by name
export const getBuilding = async (name) => {
  try {
    // Find building in array with same name as query
    const res = {};
    res.data = buildingData.find((building) => building.name == name);
    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getFloorsByBuildingName = async (name) => {
  try {
    // Get building ID from building name
    const buildingRes = await getBuilding(name);
    const buildingID = buildingRes.data.buildingID;

    // Filter floors under same building ID
    const res = {};
    res.data = floorData.filter((floor) => floor.buildingID == buildingID);
    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getLocationsByBuildingName = async (name) => {
  try {
    // Get floors in building
    const floorRes = await getFloorsByBuildingName(name);

    // Filter locations and group by floor
    const res = {};
    res.data = {};
    floorRes.data.forEach((floor) => {
      res.data[floor.floorID] = locationData.filter(
        (location) => location.floorID == floor.floorID
      );
    });

    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};
