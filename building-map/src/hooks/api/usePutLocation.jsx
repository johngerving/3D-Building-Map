import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putLocation } from "../../api/put.js";

export const usePutLocation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putLocation,
    // If the mutation fails, roll back the change
    onError: (err) => {
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (floor) => {
      queryClient.invalidateQueries({
        queryKey: ["locations", location.data.buildingName],
      });
    },
  });
};
