import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteFloor } from "../../api/delete";
import { baseURL } from "../../http-common";

export const useDeleteFloor = (buildingID) => {
  const queryClient = useQueryClient();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: async (floor) => {
      const res = await fetch(
        `${baseURL}/buildings/${buildingID}/floors/${floor.floorID}`,
        {
          method: "DELETE",
        }
      );
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error);
      }
      return json;
    },
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
