import { useCallback, useState } from "react";
import { data } from "../../../../data";
import List from "./List";
const LowerState = () => {
	const [people, setPeople] = useState(data);
	const [count, setCount] = useState(0);

	//* Using useCallback to avoid unnecessary re-renders:
	const removePerson = useCallback(
		(id) => {
			const newPeople = people.filter((person) => person.id !== id);
			setPeople(newPeople);
			//* With an empty dependency array, useCallback will use the old value which no longer exists because we deleted an item and thus only trigger the first time we use this function.
		},
		[people]
	);

	return (
		<section>
			<button
				className="btn"
				onClick={() => setCount(count + 1)}
				style={{ marginBottom: "1rem" }}
			>
				count {count}
			</button>
			<List people={people} removePerson={removePerson} />
		</section>
	);
};
export default LowerState;
