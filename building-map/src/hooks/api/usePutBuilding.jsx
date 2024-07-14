import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putBuilding } from "../../api/put.js";

export const usePutBuilding = (buildingID, isDebouncing) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putBuilding,
    onMutate: async (building) => {
      await queryClient.cancelQueries({
        predicate: (query) => query.queryKey[0] == "building",
      });
    },
    // If the mutation fails, roll back the change
    onError: (err) => {
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (building) => {
      // Do not invalidate queries if any floor states are debouncing
      if (!isDebouncing) {
        queryClient.invalidateQueries({
          queryKey: ["building", building.data.buildingName],
        });
      }
    },
  });
};
