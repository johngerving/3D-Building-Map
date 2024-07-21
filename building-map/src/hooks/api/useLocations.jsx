import { useQuery } from "@tanstack/react-query";
import { getLocationsByBuildingID } from "../../api/get";
import { baseURL } from "../../http-common";

export const useLocations = (buildingID, enabled = true) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["locations", buildingID],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/buildings/${buildingID}/locations`);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error);
      }
      return json;
    },
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
