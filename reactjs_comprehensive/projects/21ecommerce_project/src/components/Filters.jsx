import { useLoaderData, Form, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
	const { meta } = useLoaderData();
	return (
		<Form className='grid items-center px-8 py-4 rounded-md bg-base-200 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{/* Search */}
			<FormInput
				type="search"
				label="Search Products"
				name="search"
				size="input-sm"
			/>
			{/* Categories */}
			<FormSelect
				label="Select Category"
				name="category"
				list={meta.categories}
				size="select-sm"
			/>

			{/* Companies */}
			<FormSelect
				label="Select Company"
				name="company"
				list={meta.companies}
				size="select-sm"
			/>

			{/* List Order */}
			<FormSelect
				label="Sort by:"
				name="order"
				list={["a-z", "z-a", "high", "low"]}
				size="select-sm"
			/>

			{/* Price Range */}
			<FormRange name="price" label="Select Price" size="range-sm" />

			{/* Shipping */}
			<FormCheckbox name="shipping" label="Free Shipping" size="checkbox-sm" />

			{/* Buttons */}
			<button type="submit" className="btn btn-primary btn-sm">
				Search
			</button>
			<Link to="/products" className="btn btn-accent btn-sm">
				Reset
			</Link>
		</Form>
	);
};

export default Filters;
