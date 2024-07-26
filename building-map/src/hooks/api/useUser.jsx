import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../http-common";

export const useUser = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/me`, {
        credentials: "include",
      });
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
    isUserPending: isPending,
    isUserError: isError,
    user: data,
    userError: error,
  };
};
