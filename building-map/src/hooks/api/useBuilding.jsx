import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../http-common.js";

export const useBuilding = (buildingName, refetch = false) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["building", buildingName],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/buildings/${buildingName}`);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error);
      }
      return json;
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
