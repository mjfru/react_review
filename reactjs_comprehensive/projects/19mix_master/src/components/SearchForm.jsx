import { useNavigation, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = ({ searchTerm }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<Wrapper>
			<Form className="form">
				<input
					type="search"
					name="search"
					className="form-input"
					defaultValue={searchTerm}
				/>
				<button type="submit" className="btn" disabled={isSubmitting}>
					{isSubmitting ? "Searching..." : "Search"}
				</button>
			</Form>
		</Wrapper>
	);
};

export default SearchForm;
