import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
	const [people, setPeople] = useState(data);
	// console.log(people);

	const handleClear = () => {
		setPeople([]);
	};

	return (
		<>
			<main>
				<section className="container">
					<h3>{people.length} Birthday Reminders</h3>
					<List people={people} />
					<button className="btn btn-block" onClick={handleClear}>
						Clear List
					</button>
				</section>
			</main>
		</>
	);
};
export default App;
