import { useQueryClient } from "@tanstack/react-query";

export const useUpdateBuilding = (buildingName) => {
  // Get query client
  const queryClient = useQueryClient();

  // Take in ID of floor to update and a callback function
  const update = (newBuilding) => {
    console.log(queryClient.getQueryData(["building", "library"]));
    // Set the cache to the updated value
    queryClient.setQueryData(["building", buildingName], (old) => {
      return newBuilding;
    });
  };

  return { update };
};
