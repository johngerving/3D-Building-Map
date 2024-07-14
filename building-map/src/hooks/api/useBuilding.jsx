import { useQuery } from "@tanstack/react-query";
import { getBuilding } from "../../api/get";

export const useBuilding = (buildingName, refetch = false) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["building", buildingName],
    queryFn: async () => {
      return getBuilding(buildingName).then((res) => {
        return res.data;
      });
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });

  return {
    isBuildingPending: isPending,
    isBuildingError: isError,
    building: data,
    buildingError: error,
  };
};
