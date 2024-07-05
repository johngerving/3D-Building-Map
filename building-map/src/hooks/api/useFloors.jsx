import { useQuery } from "@tanstack/react-query";
import { getFloorsByBuildingName } from "../../api/get";

export const useFloors = (buildingName, refetch = false) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["floors", buildingName],
    queryFn: () =>
      getFloorsByBuildingName(buildingName).then((res) => {
        return res.data;
      }),
    staleTime: Infinity,
  });

  return {
    isFloorPending: isPending,
    isFloorError: isError,
    floors: data,
    floorError: error,
  };
};
