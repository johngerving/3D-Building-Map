import { useQueryClient, useMutation } from "@tanstack/react-query";
import { putFloor } from "../../api/put.js";
import { baseURL } from "../../http-common.js";
import { useNavigate } from "react-router-dom";

export const usePutFloor = (buildingID, debouncingStates) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data) => {
      // Create new floor object
      const newFloor = data;

      const res = await fetch(
        `${baseURL}/buildings/${buildingID}/floors/${data.floorID}`,
        {
          method: "PUT",
          body: JSON.stringify(newFloor),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const json = await res.json();

      if (res.status == 401) {
        navigate("/login");
      }

      if (!res.ok) {
        console.log(json.error);
        throw new Error(json.error);
      }
      return json;
    },
    onMutate: async (floor) => {
      await queryClient.cancelQueries({
        queryKey: ["floors", buildingID],
      });
    },
    // If the mutation fails, roll back the change
    onError: (err) => {
      console.log(err);
    },
    // Always refetch after error or success
    onSettled: (floor) => {
      // Do not invalidate queries if any floor states are debouncing
      if (Object.values(debouncingStates).every((item) => item === false)) {
        queryClient.invalidateQueries({
          queryKey: ["floors", floor.buildingID],
        });
      }
    },
  });
};
