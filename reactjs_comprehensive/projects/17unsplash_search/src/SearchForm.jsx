import { useGlobalContext } from "./context";

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(e.target.elements);
		//* This is available thanks to the name attribute
		const searchValue = e.target.elements.search.value;
		if (!searchValue) return;
		console.log(searchValue);
		setSearchTerm(searchValue);
	};

	return (
		<section>
			<h1 className="title">unsplash images</h1>
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-input search-input"
					name="search"
					placeholder="Dog"
				/>
				<button type="submit" className="btn">
					Search
				</button>
			</form>
		</section>
	);
};

export default SearchForm;
