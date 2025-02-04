import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	const [user, setUser] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const results = await fetch(url);
				//! Error handling (for HTTP requests) using fetch:
				if (!results.ok) {
					setHasError(true);
					setIsLoading(false);
					return;
				}

				const userData = await results.json();
				// console.log(userData);
				setUser(userData);
				setIsLoading(false);
			} catch (error) {
				setHasError(true);
				console.log(error);
			}
		}
		fetchData();
	}, []);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}
	if (hasError) {
		return <h2>An unexpected error occurred.</h2>;
	}
  
  //? Only if these above two conditions are met will we have access to the user.

  const { avatar_url, name, company, bio } = user;

	return (

		<div>
			<img
				style={{ width: "150px", borderRadius: "25px" }}
				src={avatar_url}
				alt={name}
			/>
			<h2>{name}</h2>
			<h3>Works at: {company}</h3>
			<p>{bio}</p>
		</div>
	);
};
export default MultipleReturnsFetchData;
