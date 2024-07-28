import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../http-common";
import { useNavigate } from "react-router-dom";

export const useUser = (redirect = false) => {
  const navigate = useNavigate();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`${baseURL}/me`, {
        credentials: "include",
      });
      const json = await res.json();

      // Redirect if not authorized and redirect is true
      if (res.status == 401 && redirect) {
        navigate("/login");
      }

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
