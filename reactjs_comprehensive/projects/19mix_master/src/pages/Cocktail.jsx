import axios from "axios";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../assets/wrappers/CocktailPage";
import { use } from "react";

const singleCocktailQuery = (id) => {
	return {
		queryKey: ["cocktail", id],
		queryFn: async () => {
			const { data } = await axios.get(`${singleCocktailUrl}${id}`);
			return data;
		},
	};
};

const singleCocktailUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader =
	(queryClient) =>
	async ({ params }) => {
		const { id } = params;
		await queryClient.ensureQueryData(singleCocktailQuery(id));
		return { id };
	};

const Cocktail = () => {
	const { id } = useLoaderData();

	// if (!data) return <h2>Something went wrong here...</h2>;
	const { data } = useQuery(singleCocktailQuery(id));
	if (!data) return <Navigate to="/" />;

	const singleDrink = data.drinks[0];

	const {
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strCategory: category,
		strGlass: glass,
		strInstructions: instructions,
	} = singleDrink;

	//* Getting the ingredients list
	const drinkIngredients = Object.keys(singleDrink)
		.filter((key) => key.startsWith("strIngre") && singleDrink[key] !== null)
		.map((key) => singleDrink[key]);
	console.log(drinkIngredients);

	return (
		<Wrapper>
			<header>
				<Link to="/" className="btn">
					Home
				</Link>
				<h3>{name}</h3>
			</header>
			<div className="drink">
				<img src={image} alt={name} className="img" />
				<div className="drink-info">
					<p>
						<span className="drink-data">Name :</span>
						{name}
					</p>
					<p>
						<span className="drink-data">Category :</span>
						{category}
					</p>
					<p>
						<span className="drink-data">Info :</span>
						{info}
					</p>
					<p>
						<span className="drink-data">Glass :</span>
						{glass}
					</p>
					<p>
						<span className="drink-data">Ingredients :</span>
						{drinkIngredients.map((item, index) => {
							return (
								<span className="ing" key={index}>
									{item}
									{index < drinkIngredients.length - 1 ? "," : ""}
								</span>
							);
						})}
					</p>
					<p>
						<span className="drink-data">Instructions :</span>
						{instructions}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Cocktail;
