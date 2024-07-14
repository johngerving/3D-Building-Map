import { useQuery } from "@tanstack/react-query";
import { getFloorsByBuildingID } from "../../api/get";

export const useFloors = (buildingID, enabled = true, refetch = false) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["floors", buildingID],
    queryFn: async () => {
      return getFloorsByBuildingID(buildingID).then((res) => {
        return res.data;
      });
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
