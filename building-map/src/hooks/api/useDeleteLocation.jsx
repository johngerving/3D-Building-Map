import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteLocation } from "../../api/delete";

export const useDeleteLocation = (buildingName) => {
  const queryClient = useQueryClient();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: deleteLocation,
    // Returning the promise makes the mutation stay in pending state until the cache has finished revalidating
    onSettled: async () => {
      // Invalidate location queries
      return await queryClient.invalidateQueries({
        queryKey: ["locations", buildingName],
      });
    },
  });

  return { isPending, variables, mutate, isError };
};
