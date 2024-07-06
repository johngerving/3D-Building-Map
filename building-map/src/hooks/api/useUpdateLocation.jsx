import { useQueryClient } from "@tanstack/react-query";

export const useUpdateLocation = (buildingName, floorID) => {
  // Get query client
  const queryClient = useQueryClient();

  // Take in ID of location to update and a callback function
  const update = (locationID, func) => {
    // Set the cache to the updated value
    queryClient.setQueryData(["locations", buildingName], (old) => {
      return {
        ...old,
        [floorID]: old[floorID].map((oldLocation) => {
          // Replace old location with ID with new one
          if (oldLocation.locationID == locationID) {
            return func(oldLocation);
          } else {
            return oldLocation;
          }
        }),
      };
    });
  };

  return { update };
};
