import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

useLoaderData;

const cocktailSearchUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url)

	const searchTerm = url.searchParams.get('search') || "gin";
	const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
	return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
	const { drinks, searchTerm } = useLoaderData();
	// console.log(drinks);
	return (
		<>
			<SearchForm searchTerm={searchTerm}/>
			<CocktailList drinks={drinks} />
		</>
	);
};

export default Landing;

/*
It seems they’ve made some changes to the API. Now, if you search without providing a search value (e.g., ?s=), it returns an error message instead of a list of random drinks. The fix is simple: provide at least one letter, such as 'a', and you’ll get a list of drinks.

Example: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a
*/
