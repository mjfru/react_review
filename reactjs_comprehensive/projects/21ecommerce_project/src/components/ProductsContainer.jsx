import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
	const { meta } = useLoaderData();
	const totalProducts = meta.pagination.total;
	const [layout, setLayout] = useState("grid");

	const setActiveStyles = (pattern) => {
		return `text-xl btn btn-circle btn-sm ${
			pattern === layout
				? "btn-primary text-primary-content"
				: "btn-ghost text-based-content"
		}`;
	};

	return (
		<>
			{/* Header */}
			<div className="flex items-center justify-between pb-5 mt-8 border-b border-base-300">
			<h4 className="font-medium text-md">
				{totalProducts} Product{totalProducts > 1 && "s"}
			</h4>
        
			<div className="flex-gap-x-2">
				<button
					type="button"
					onClick={() => setLayout("grid")}
					className={setActiveStyles("grid")}
				>
					<BsFillGridFill />
				</button>
				<button
					type="button"
					onClick={() => setLayout("list")}
					className={setActiveStyles("list")}
				>
					<BsList />
				</button>
			</div>
      </div>

			{/* Products */}
			<div>
				{totalProducts === 0 ? (
					<h5 className="mt-16 text-2xl">
						Sorry, no products match your search.
					</h5>
				) : layout === "grid" ? (
					<ProductsGrid />
				) : (
					<ProductsList />
				)}
			</div>
		</>
	);
};

export default ProductsContainer;
