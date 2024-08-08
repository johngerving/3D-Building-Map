import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteLocation } from "../../api/delete";
import { baseURL } from "../../http-common";
import { useNavigate } from "react-router-dom";

export const useDeleteLocation = (buildingID) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: async (location) => {
      const res = await fetch(
        `${baseURL}/buildings/${buildingID}/locations/${location.locationID}`,
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
      // Invalidate location queries
      return await queryClient.invalidateQueries({
        queryKey: ["locations", buildingID],
      });
    },
  });

  return { isPending, variables, mutate, isError };
};
