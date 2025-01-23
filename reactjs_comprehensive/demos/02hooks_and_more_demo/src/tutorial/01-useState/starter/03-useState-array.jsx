import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
	const [people, setPeople] = useState(data);

	function handleDeleteOne(id) {
		setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
	}

	function handleClearAll() {
		setPeople([]);
	}

	return (
		<>
			<h2>useState array example</h2>
			{people.map((person) => {
				return (
					<div>
						<h3 key={person.id}>{person.name}</h3>
						<button className="btn" onClick={() => handleDeleteOne(person.id)}>
							Delete
						</button>
					</div>
				);
			})}
			<button className="btn" onClick={handleClearAll}>
				Clear List
			</button>
		</>
	);
};

export default UseStateArray;
