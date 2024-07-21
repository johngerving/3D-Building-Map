import { useQueryClient, useMutation } from "@tanstack/react-query";
import { baseURL } from "../../http-common.js";

export const useUploadSVG = (floor, debouncingStates, onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (file) => {
      // Create form data from file state
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", file.name);

      // Post form data
      const res = await fetch(`${baseURL}/files`, {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error);
      }
      // Get URL from response
      const fileURL = json.url;

      // Update floor with URL
      const putFloorRes = await fetch(
        `${baseURL}/buildings/${floor.buildingID}/floors/${floor.floorID}`,
        {
          method: "PUT",
          body: JSON.stringify({ ...floor, svg: fileURL }), // Replace SVG path with file URL
          headers: { "Content-Type": "application/json" },
        }
      );
      const putFloorJson = await putFloorRes.json();
      if (!putFloorRes.ok) {
        throw new Error(putFloorJson.error);
      }
      return putFloorJson;
    },
    onMutate: async (floor) => {
      await queryClient.cancelQueries({
        queryKey: ["floors", floor.buildingID],
      });
    },
    // If the mutation fails, log error
    onError: (err) => {
      console.log(err);
    },
    onSuccess: onSuccess,
    // Always refetch after error or success
    onSettled: (floor) => {
      // Do not invalidate queries if any floor states are debouncing
      if (Object.values(debouncingStates).every((item) => item === false)) {
        queryClient.invalidateQueries({
          queryKey: ["floors", floor.buildingID],
        });
      }
    },
  });
};
