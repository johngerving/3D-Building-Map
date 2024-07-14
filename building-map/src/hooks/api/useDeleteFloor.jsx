import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteFloor } from "../../api/delete";

export const useDeleteFloor = (buildingID) => {
  const queryClient = useQueryClient();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: deleteFloor,
    // Returning the promise makes the mutation stay in pending state until the cache has finished revalidating
    onSettled: async () => {
      // Invalidate location queries
      await queryClient.invalidateQueries({
        queryKey: ["floors", buildingID],
      });
      return await queryClient.invalidateQueries({
        queryKey: ["locations", buildingID],
      });
    },
  });

  return { isPending, variables, mutate, isError };
};
