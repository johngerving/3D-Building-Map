import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postFloor } from "../../api/post.js";

export const usePostFloor = (buildingName) => {
  const queryClient = useQueryClient();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: postFloor,
    // Returning the promise makes the mutation stay in pending state until the cache has finished revalidating
    onSettled: async () => {
      // Invalidate floor and location queries
      queryClient.invalidateQueries({
        queryKey: ["locations", buildingName],
      });
      return await queryClient.invalidateQueries({
        queryKey: ["floors", buildingName],
      });
    },
  });

  return { isPending, variables, mutate, isError };
};