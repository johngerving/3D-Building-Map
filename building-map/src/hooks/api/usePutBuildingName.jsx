import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putBuilding } from "../../api/put";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../http-common";

export const usePutBuildingName = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { isPending, variables, mutate, error, isError } = useMutation({
    mutationFn: async (data) => {
      // Create new building object
      const newBuilding = data;

      const res = await fetch(
        `${baseURL}/buildings/${newBuilding.buildingID}`,
        {
          method: "PUT",
          body: JSON.stringify(newBuilding),
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
    onSuccess: async (building) => {
      // Redirect to new building route
      navigate(`/${building.buildingName}/editor`);
    },
  });

  return { isPending, variables, mutate, error, isError };
};
