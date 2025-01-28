import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
	const [IsLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const deleteTour = (id) => {
		const newToursList = tours.filter((tour) => tour.id !== id);
		setTours(newToursList);
	};

	const getTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			console.log(tours);
			setTours(tours);
		} catch (error) {
			console.log(error.message);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		getTours();
	}, []);

	if (IsLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>No tours remaining</h2>
					<button
						type="button"
						className="btn"
						style={{ marginTop: "2rem" }}
						onClick={() => getTours()}
					>
						Refresh
					</button>
				</div>
			</main>
		);
	}

	return (
		<>
			<main>
				<Tours tours={tours} deleteTour={deleteTour} />
			</main>
		</>
	);
};
export default App;
