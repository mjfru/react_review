import { Hero } from "../components";
import { customFetch } from "../utils/index";

const url = "/products?featured=true";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
	const response = await customFetch(url);
	console.log(response);
	const products = response.data.data;
	return { products };
};

const Landing = () => {
	return (
		<>
			<Hero />
		</>
	);
};

export default Landing;
