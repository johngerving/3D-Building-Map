import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../http-common";

export const useUserPermissions = (buildingID) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["permissions", buildingID],
    queryFn: async () => {
      const res = await fetch(
        `${baseURL}/buildings/${buildingID}/permissions`,
        {
          credentials: "include",
        }
      );
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
    isPermissionPending: isPending,
    isPermissionError: isError,
    permissions: data,
    permissionError: error,
  };
};
