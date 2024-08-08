import { useQueryClient, useMutation } from "@tanstack/react-query";
import { baseURL } from "../../http-common";
import { useNavigate } from "react-router-dom";

export const useDeleteUserPermissions = (buildingID) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, error, mutate, isError } = useMutation({
    mutationFn: async (userID) => {
      const res = await fetch(
        `${baseURL}/buildings/${buildingID}/permissions/${userID}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const json = await res.json();

      if (res.status == 401) {
        navigate("/login");
      }

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
