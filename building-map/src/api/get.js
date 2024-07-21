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
    res.data = buildingData.find((building) => building.buildingName == name);
    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getFloorsByBuildingID = async (id) => {
  try {
    // Filter floors under same building name
    const res = {};
    res.data = floorData
      .filter((floor) => floor.buildingID == id)
      .sort((a, b) => {
        return a.index - b.index;
      });
    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};

export const getLocationsByBuildingID = async (id) => {
  try {
    // Get floors in building
    const floorRes = await getFloorsByBuildingID(id);

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
