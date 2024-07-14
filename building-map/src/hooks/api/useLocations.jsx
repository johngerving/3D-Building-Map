import { useQuery } from "@tanstack/react-query";
import { getLocationsByBuildingID } from "../../api/get";

export const useLocations = (buildingID, enabled = true) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["locations", buildingID],
    queryFn: () =>
      getLocationsByBuildingID(buildingID).then((res) => {
        return res.data;
      }),
    staleTime: Infinity,
    enabled: enabled,
  });

  return {
    isLocationPending: isPending,
    isLocationError: isError,
    locations: data,
    locationError: error,
  };
};
