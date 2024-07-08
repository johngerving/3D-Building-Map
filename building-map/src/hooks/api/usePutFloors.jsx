import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putFloor } from "../../api/put.js";

export const usePutFloors = (buildingName, isDebouncing) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (floors) => {
      // Make a request for each floor
      let newFloors = [];
      for (let i = 0; i < floors.length; i++) {
        const floor = await putFloor(floors[i]);
        newFloors.push(floor.data);
      }

      return newFloors;
    },
    onMutate: async (floors) => {
      console.log("usePutFloors", floors);
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
      // Do not invalidate queries if state is debouncing
      if (!isDebouncing) {
        queryClient.invalidateQueries({
          queryKey: ["floors", buildingName],
        });
      }
    },
  });
};
