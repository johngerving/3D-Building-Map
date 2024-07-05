import { useQuery } from "@tanstack/react-query";
import { getFloorsByBuildingName } from "../../api/get";

export const useFloors = (buildingName) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["floors", buildingName],
    queryFn: () =>
      getFloorsByBuildingName(buildingName).then((res) => {
        return res.data;
      }),
  });

  return {
    isFloorPending: isPending,
    isFloorError: isError,
    floors: data,
    floorError: error,
  };
};
