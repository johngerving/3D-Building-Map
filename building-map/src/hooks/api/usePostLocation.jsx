import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postLocation } from "../../api/post.js";
import { baseURL } from "../../http-common.js";
import { useNavigate } from "react-router-dom";

export const usePostLocation = (buildingID) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: async (data) => {
      // Create new location object - use default parameters if not provided
      const newLocation = {
        floorID: data.floorID,
        name: data.hasOwnProperty("name") ? data.name : "Untitled",
        description: data.hasOwnProperty("description") ? data.description : "",
        position: data.hasOwnProperty("position") ? data.position : [0, 0],
        type: data.hasOwnProperty("type") ? data.type : "",
        defaultEnabled: data.hasOwnProperty("defaultEnabled")
          ? data.defaultEnabled
          : true,
      };

      const res = await fetch(`${baseURL}/buildings/${buildingID}/locations`, {
        method: "POST",
        body: JSON.stringify([newLocation]),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const json = await res.json();

      if (res.status == 401) {
        navigate("/login");
      }

      if (!res.ok) {
        console.log(json.error);
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
