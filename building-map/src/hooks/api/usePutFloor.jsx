import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putFloor } from "../../api/put.js";

export const usePutFloor = (buildingName, isDebouncing) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putFloor,
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
    onSettled: (floor) => {
      // Do not invalidate queries if state is debouncing
      if (!isDebouncing) {
        queryClient.invalidateQueries({
          queryKey: ["floors", floor.data.buildingName],
        });
      }
    },
  });
};
