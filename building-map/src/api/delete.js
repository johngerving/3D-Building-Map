import {
  buildingData,
  floorData,
  locationData,
  deleteFromLocations,
} from "../assets/buildingProperties.js";

/* Mock DELETE API Calls */

// Simulate API response time
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Delete floor
export const deleteFloor = async (data) => {
  try {
    const res = {};

    // Get index of floor in array
    const floorIndex = floorData.findIndex(
      (floor) => floor.floorID == data.floorID
    );
    // Remove from the array
    floorData.splice(floorIndex, 1);

    // Filter locations, removing the ones in the floor
    deleteFromLocations((location) => {
      return location.floorID != data.floorID;
    });

    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};

// Delete location
export const deleteLocation = async (data) => {
  try {
    const res = {};

    console.log(data);

    // Filter from locations, removing the one with the location ID
    deleteFromLocations((location) => location.locationID != data.locationID);

    await sleep(500);
    return await res;
  } catch (err) {
    throw new Error(err);
  }
};
