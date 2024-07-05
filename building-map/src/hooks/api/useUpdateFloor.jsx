import { useQueryClient } from "@tanstack/react-query";

export const useUpdateFloor = (buildingName) => {
  // Get query client
  const queryClient = useQueryClient();

  // Take in ID of floor to update and a callback function
  const update = (floorID, func) => {
    // Set the cache to the updated value
    queryClient.setQueryData(["floors", buildingName], (old) => {
      return old.map((oldFloor) => {
        // Replace old floor with ID with new one
        if (oldFloor.floorID == floorID) {
          return func(oldFloor);
        } else {
          return oldFloor;
        }
      });
    });
  };

  return { update };
};
