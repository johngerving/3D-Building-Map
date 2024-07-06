import { useQueryClient } from "@tanstack/react-query";

export const useUpdateLocation = (buildingName) => {
  // Get query client
  const queryClient = useQueryClient();

  // Take in ID of floor to update and a callback function
  const update = (locationID, func) => {
    // Set the cache to the updated value
    queryClient.setQueryData(["locations", buildingName], (old) => {
      return old.map((oldLocation) => {
        // Replace old floor with ID with new one
        if (oldLocation.locationID == locationID) {
          return func(oldLocation);
        } else {
          return oldLocation;
        }
      });
    });
  };

  return { update };
};
