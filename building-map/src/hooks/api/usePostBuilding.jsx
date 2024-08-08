import { useQueryClient, useMutation } from "@tanstack/react-query";
import { baseURL } from "../../http-common.js";
import { useNavigate } from "react-router-dom";

export const usePostBuilding = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: async (building) => {
      const res = await fetch(`${baseURL}/buildings`, {
        method: "POST",
        body: JSON.stringify(building),
        headers: { "Content-Type": "application/json" },
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
    onSettled: async (building) => {
      // Invalidate building queries
      await queryClient.invalidateQueries({
        queryKey: ["user", "buildings"],
      });
      // Redirect to new building
      navigate(`/${building.buildingName}/edit`);
    },
  });

  return { isPending, variables, mutate, isError };
};
