import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putBuilding } from "../../api/put";
import { useNavigate } from "react-router-dom";

export const usePutBuildingName = (buildingName) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { isPending, variables, mutate, isError } = useMutation({
    mutationFn: putBuilding,
    // Returning the promise makes the mutation stay in pending state until the cache has finished revalidating
    onSettled: async (building) => {
      console.log("settled");
      console.log(`/${building.data.buildingName}/editor`);
      // Redirect to new building route
      navigate(`/${building.data.buildingName}/editor`);
    },
  });

  return { isPending, variables, mutate, isError };
};
