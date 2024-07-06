import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putLocation } from "../../api/put.js";

export const usePutLocation = (buildingName, isDebouncing) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putLocation,
    onMutate: async (location) => {
      await queryClient.cancelQueries({
        queryKey: ["locations", buildingName],
      });
    },
    // If the mutation fails, roll back the change
    onError: (err) => {
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (location) => {
      // Do not invalidate queries if state is debouncing
      if (!isDebouncing) {
        queryClient.invalidateQueries({
          queryKey: ["locations", buildingName],
        });
      }
    },
  });
};
