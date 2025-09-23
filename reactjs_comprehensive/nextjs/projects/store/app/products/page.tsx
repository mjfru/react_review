import ProductsContainer from "@/components/products/ProductsContainer";

function ProductsPage({
	// In a Server Component (e.g., page.tsx), searchParams are available as a prop passed to the page component.
	// The searchParams prop is an object where keys represent the parameter names and values represent their corresponding values from the URL query string.
	searchParams,
}: {
	searchParams: { layout?: string; search?: string };
}) {
	const layout = searchParams.layout || "grid";
	const search = searchParams.search || "";
	// console.log(searchParams);

	return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
