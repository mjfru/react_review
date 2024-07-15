import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  // The custom hook comes from ReactQuery
  const queryClient = useQueryClient();

  // Comes from ReactQuery, takes an object, acts as a callback we can use within a button or DOM element.
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    // Invalidate the cache so the app is forced to reload / refetch upon deletion:
    onSuccess: () => {
      toast.success("Cabin successfully deleted.");
      queryClient.invalidateQueries({
        // queryKey needs to match what's defined in useQuery (in CabinTable)
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
}
