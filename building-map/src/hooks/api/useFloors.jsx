import { useQuery } from "@tanstack/react-query";
import { getFloorsByBuildingID } from "../../api/get";
import { baseURL } from "../../http-common";

export const useFloors = (buildingID, enabled = true, refetch = false) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["floors", buildingID],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/buildings/${buildingID}/floors`);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error);
      }
      return json;
    },
    staleTime: Infinity,
    gcTime: Infinity,
    enabled: enabled,
  });

  return {
    isFloorPending: isPending,
    isFloorError: isError,
    floors: data,
    floorError: error,
  };
};
