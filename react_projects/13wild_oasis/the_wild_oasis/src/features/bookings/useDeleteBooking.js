import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  // The custom hook comes from ReactQuery
  const queryClient = useQueryClient();

  // Comes from ReactQuery, takes an object, acts as a callback we can use within a button or DOM element.
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    // Invalidate the cache so the app is forced to reload / refetch upon deletion:
    onSuccess: () => {
      toast.success("Booking successfully deleted.");
      queryClient.invalidateQueries({
        // queryKey needs to match what's defined in useQuery (in BookingTable)
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteBooking };
}
