import { useQueryClient, useMutation } from "@tanstack/react-query";
import { baseURL } from "../../http-common.js";

export const usePutUserPermissions = (buildingID) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      // Create new permissions object
      const newPermissions = data;

      const res = await fetch(
        `${baseURL}/buildings/${buildingID}/permissions/${data.userID}`,
        {
          method: "PUT",
          body: JSON.stringify(newPermissions),
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
    onMutate: async (permissions) => {
      await queryClient.cancelQueries({
        queryKey: ["permissions", buildingID],
      });
    },
    // If the mutation fails, roll back the change
    onError: (err) => {
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (permissions) => {
      queryClient.invalidateQueries({
        queryKey: ["permissions", buildingID],
      });
    },
  });
};
