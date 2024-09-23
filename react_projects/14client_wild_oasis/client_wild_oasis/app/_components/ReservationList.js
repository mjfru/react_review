"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

export default function ReservationList({ bookings }) {
	// Think about the actual state and the 'optimistic' state when using this.
	//* [optimisticState, setterFunction ] = useOptimistic(currentState, an update function)
	const [optimisticBookings, optimisticDelete] = useOptimistic(
		bookings,
		() => {}
	);

	async function handleDelete(bookingId) {
		await deleteReservation(bookingId);
	}

	return (
		<ul className="space-y-6">
			{bookings.map((booking) => (
				<ReservationCard
					booking={booking}
					key={booking.id}
					onDelete={handleDelete}
				/>
			))}
		</ul>
	);
}
