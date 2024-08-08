import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postFloor } from "../../api/post.js";
import { baseURL } from "../../http-common.js";
import { useNavigate } from "react-router-dom";

export const usePostFloor = (buildingID) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: async (floor) => {
      const res = await fetch(`${baseURL}/buildings/${buildingID}/floors`, {
        method: "POST",
        credentials: "include",
      });
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
      // Invalidate floor and location queries
      queryClient.invalidateQueries({
        queryKey: ["locations", buildingID],
      });
      return await queryClient.invalidateQueries({
        queryKey: ["floors", buildingID],
      });
    },
  });

  return { isPending, variables, mutate, isError };
};
