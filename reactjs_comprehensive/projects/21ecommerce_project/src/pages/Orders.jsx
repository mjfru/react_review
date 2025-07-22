import { redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
	(store) =>
	async ({ request }) => {
		const user = store.getState().userState.user;
		if (!user) {
			return redirect("/login");
		}
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);

		try {
			const response = await customFetch.get("/orders", {
				params,
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			});
			console.log(response);

			return { orders: response.data.data, meta: response.data.meta };
		} catch (e) {
			console.log(e);
			if (e.response.status === 401 || e.response.status === 403)
				return redirect("/login");
			return null;
		}
	};

const Orders = () => {
	const { meta } = useLoaderData();
	if (meta.pagination.total < 1) {
		return <SectionTitle text="Please create an order" />;
	}
	return (
		<>
			<SectionTitle text="Your Orders" />
			<OrdersList />
			<PaginationContainer />
		</>
	);
};

export default Orders;
