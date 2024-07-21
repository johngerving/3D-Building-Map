import { useQueryClient, useMutation } from "@tanstack/react-query";
import { postLocations } from "../../api/post.js";
import { baseURL } from "../../http-common.js";

export const usePostLocations = (buildingID) => {
  const queryClient = useQueryClient();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: async (data) => {
      const locations = data.locations;

      const newLocations = [];

      // Create new location for each provided
      locations.forEach((location) => {
        // Create new location object - use default parameters if not provided
        const newLocation = {
          floorID: location.floorID,
          name: location.hasOwnProperty("name") ? location.name : "Untitled",
          description: location.hasOwnProperty("description")
            ? location.description
            : "",
          position: location.hasOwnProperty("position")
            ? location.position
            : [0, 0],
          type: location.hasOwnProperty("type") ? location.type : "",
          defaultEnabled: location.hasOwnProperty("defaultEnabled")
            ? location.defaultEnabled
            : true,
        };

        newLocations.push(newLocation);
      });

      // Post locations
      const res = await fetch(`${baseURL}/buildings/${buildingID}/locations`, {
        method: "POST",
        body: JSON.stringify(newLocations),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
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
