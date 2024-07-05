import { useQuery } from "@tanstack/react-query";
import { getLocationsByBuildingName } from "../../api/get";

export const useLocations = (buildingName) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["locations", buildingName],
    queryFn: () =>
      getLocationsByBuildingName(buildingName).then((res) => {
        return res.data;
      }),
    staleTime: Infinity,
  });

  return {
    isLocationPending: isPending,
    isLocationError: isError,
    locations: data,
    locationError: error,
  };
};
