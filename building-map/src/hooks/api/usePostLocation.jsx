import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postLocation } from "../../api/post.js";

export const usePostLocation = (buildingName) => {
  const queryClient = useQueryClient();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: postLocation,
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
