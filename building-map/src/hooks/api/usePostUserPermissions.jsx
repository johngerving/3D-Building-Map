import { useQueryClient, useMutation } from "@tanstack/react-query";
import { baseURL } from "../../http-common.js";
import { useNavigate } from "react-router-dom";

export const usePostUserPermissions = (buildingID) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: async (userID) => {
      const res = await fetch(
        `${baseURL}/buildings/${buildingID}/permissions`,
        {
          method: "POST",
          body: JSON.stringify({
            userID: userID,
            buildingID: buildingID,
            role: "Editor",
          }),
          headers: { "Content-Type": "application/json" },
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
      // Invalidate permissions queries
      return await queryClient.invalidateQueries({
        queryKey: ["permissions", buildingID],
      });
    },
  });

  return { isPending, variables, mutate, isError };
};