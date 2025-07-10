import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ request }) => {
	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries(),
	]);
	const response = await customFetch(url, { params });
	console.log(response);
	const products = response.data.data;
	const meta = response.data.meta;
	return { products, meta, params };
};

const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
};

export default Products;
