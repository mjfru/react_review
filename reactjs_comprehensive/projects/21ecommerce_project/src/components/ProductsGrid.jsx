import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsGrid = () => {
	const { products } = useLoaderData();
	console.log(products);

	return (
		<div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => {
				const { title, price, image } = product.attributes;
				const dollarsAmount = formatPrice(price);

				return (
					<Link
						key={product.id}
						to={`products/${product.id}`}
						className="w-full transition duration-300 shadow-xl card hover:shadow-2xl"
					>
						<figure className="px-4 pt-4">
							<img
								src={image}
								alt={title}
								className="object-cover w-full h-64 rounded-xl :h-48"
							/>
						</figure>
						<div className="items-center text-center card-body">
							<h2 className="tracking-wider capitalize card-title">{title}</h2>
							<span className="text-secondary">{dollarsAmount}</span>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default ProductsGrid;
