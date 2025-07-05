import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
	const response = await customFetch(`/products/${params.id}`);
	console.log(response);

	return { product: response.data.data };
};

const SingleProduct = () => {
	const [productColor, setProductColor] = useState([0]);
	const [amount, setAmount] = useState(1);

	const handleAmount = (e) => {
		setAmount(parseInt(e.target.value));
	};

	const { product } = useLoaderData();
	// console.log(product);

	const { image, title, price, description, colors, company } =
		product.attributes;
	const dollarsAmount = formatPrice(price);
	return (
		<section>
			<div className="text-md breadcrumbs">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</div>

			{/* Product */}
			<div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16">
				{/* Image */}
				<img
					src={image}
					alt={title}
					className="object-cover rounded-lg w-96 h-96 lg:w-full"
				/>

				{/* Info */}
				<div>
					<h1 className="text-3xl font-bold capitalize">{title}</h1>
					<h4 className="mt-2 text-xl font-bold text-neutral-content">
						{company}
					</h4>
					<p className="mt-3 text-xl">{dollarsAmount}</p>
					<p className="mt-6 leading-8">{description}</p>
					{/* Colors */}
					<div>
						<div className="mt-6">
							<h4 className="font-medium tracking-wider capitalize text-md">
								Colors
							</h4>
							<div className="mt-2">
								{colors.map((color) => {
									return (
										<button
											key={color}
											type="button"
											className={`badge w-6 h-6 mr-2 ${
												color === productColor && "border-2 border-secondary"
											}`}
											style={{ backgroundColor: color }}
											onClick={() => setProductColor(color)}
										></button>
									);
								})}
							</div>
						</div>
						{/* Amount */}
						<div className="w-full max-w-xs form-control">
							<label className="label" htmlFor="amount">
								<h4 className="font-medium tracking-wider capitalize text-md">
									Amount
								</h4>
							</label>
							<select
								id="amount"
								className="select select-secondary select-bordered select-md"
								value={amount}
								onChange={handleAmount}
							>
								<option value={1}>1</option>
								<option value={2}>2</option>
								<option value={3}>3</option>
							</select>
						</div>

						{/* Cart Button */}
						<div className="mt-10">
							<button
								type="button"
								className="btn btn-secondary btn-md"
								onClick={() => console.log("Added")}
							>
								Add to cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
