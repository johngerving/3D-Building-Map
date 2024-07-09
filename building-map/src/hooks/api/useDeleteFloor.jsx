import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteFloor } from "../../api/delete";

export const useDeleteFloor = (buildingName) => {
  const queryClient = useQueryClient();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: deleteFloor,
    // Returning the promise makes the mutation stay in pending state until the cache has finished revalidating
    onSettled: async () => {
      // Invalidate location queries
      await queryClient.invalidateQueries({
        queryKey: ["floors", buildingName],
      });
      return await queryClient.invalidateQueries({
        queryKey: ["locations", buildingName],
      });
    },
  });

  return { isPending, variables, mutate, isError };
};
