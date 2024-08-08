import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putBuilding } from "../../api/put.js";
import { baseURL } from "../../http-common.js";
import { useNavigate } from "react-router-dom";

export const usePutBuilding = (buildingID, isDebouncing) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data) => {
      // Create new building object
      const newBuilding = data;

      const res = await fetch(`${baseURL}/buildings/${buildingID}`, {
        method: "PUT",
        body: JSON.stringify(newBuilding),
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
    onMutate: async (building) => {
      await queryClient.cancelQueries({
        predicate: (query) => query.queryKey[0] == "building",
      });
    },
    // If the mutation fails
    onError: (err) => {
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (building) => {
      // Do not invalidate queries if any floor states are debouncing
      if (!isDebouncing) {
        queryClient.invalidateQueries({
          queryKey: ["building", building.buildingName],
        });
      }
    },
  });
};
