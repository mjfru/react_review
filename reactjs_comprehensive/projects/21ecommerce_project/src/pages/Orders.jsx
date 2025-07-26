import { redirect, useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import {
	OrdersList,
	ComplexPaginationContainer,
	SectionTitle,
} from "../components";

const ordersQuery = (params, user) => {
	return {
		queryKey: [
			"orders",
			user.username,
			params.page ? parseInt(params.page) : 1,
		],
		queryFn: () =>
			customFetch.get("/orders", {
				params,
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}),
	};
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader =
	(store, queryClient) =>
	async ({ request }) => {
		const user = store.getState().userState.user;
		if (!user) {
			return redirect("/login");
		}
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);

		try {
			const response = await queryClient.ensureQueryData(
				ordersQuery(params, user)
			);
			console.log(response);
			return { orders: response.data.data, meta: response.data.meta };
		} catch (e) {
			console.log(e);
			if (e?.response?.status === 401 || e?.response?.status === 403)
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
			<ComplexPaginationContainer />
		</>
	);
};

export default Orders;
