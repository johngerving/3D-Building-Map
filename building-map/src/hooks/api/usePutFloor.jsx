import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putFloor } from "../../api/put.js";

export const usePutFloor = (buildingName, debouncingStates) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putFloor,
    onMutate: async (floor) => {
      await queryClient.cancelQueries({
        queryKey: ["floors", buildingName],
      });
    },
    // If the mutation fails, roll back the change
    onError: (err) => {
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (floor) => {
      // Do not invalidate queries if any floor states are debouncing
      if (Object.values(debouncingStates).every((item) => item === false)) {
        queryClient.invalidateQueries({
          queryKey: ["floors", floor.data.buildingName],
        });
      }
    },
  });
};
