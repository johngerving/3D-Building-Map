import { useQueryClient, useMutation } from "@tanstack/react-query";
import { baseURL } from "../../http-common";

export const useDeleteUserPermissions = (buildingID) => {
  const queryClient = useQueryClient();

  const { isPending, error, mutate, isError } = useMutation({
    mutationFn: async (userID) => {
      const res = await fetch(
        `${baseURL}/buildings/${buildingID}/permissions/${userID}`,
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
      // Invalidate permission queries
      return await queryClient.invalidateQueries({
        queryKey: ["permissions", buildingID],
      });
    },
  });

  return {
    isDeletePending: isPending,
    deletePermission: mutate,
    isDeleteError: isError,
    deleteError: error,
  };
};
