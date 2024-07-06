import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putFloor } from "../../api/put.js";

export const usePutFloor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putFloor,
    // If the mutation fails, roll back the change
    onError: (err) => {
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (floor) => {
      queryClient.invalidateQueries({
        queryKey: ["floors", floor.data.buildingName],
      });
    },
  });
};
