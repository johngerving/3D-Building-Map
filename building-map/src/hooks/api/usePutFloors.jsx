import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putFloor } from "../../api/put.js";

export const usePutFloors = (buildingName, isDebouncing) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (floors) => {
      // Make a request for each floor
      let newFloors = [];
      for (let i = 0; i < floors.length; i++) {
        // Modify the floor in question
        const res = await fetch(
          `${baseURL}/buildings/${buildingID}/floors/${floors[i].floorID}`,
          {
            method: "PUT",
            body: JSON.stringify(newFloor),
            headers: { "Content-Type": "application/json" },
          }
        );
        const json = await res.json();
        // Throw error if response had error
        if (!res.ok) {
          console.log(json.error);
          throw new Error(json.error);
        }
        // Add new floor to the
        newFloors.push(json);
      }

      console.log("usePutFloors");

      return newFloors;
    },
    onMutate: async (floors) => {
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
