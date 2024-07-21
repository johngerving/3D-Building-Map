import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putLocation } from "../../api/put.js";
import { baseURL } from "../../http-common.js";

export const usePutLocation = (buildingID, isDebouncing) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      // Create new location object
      const newLocation = data;

      const res = await fetch(
        `${baseURL}/buildings/${buildingID}/locations/${data.locationID}`,
        {
          method: "PUT",
          body: JSON.stringify(newLocation),
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await res.json();
      if (!res.ok) {
        console.log(json.error);
        throw new Error(json.error);
      }
      return json;
    },
    onMutate: async (location) => {
      await queryClient.cancelQueries({
        queryKey: ["locations", buildingID],
      });
    },
    // If the mutation fails, roll back the change
    onError: (err) => {
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (location) => {
      // Do not invalidate queries if state is debouncing
      if (!isDebouncing) {
        queryClient.invalidateQueries({
          queryKey: ["locations", buildingID],
        });
      }
    },
  });
};
