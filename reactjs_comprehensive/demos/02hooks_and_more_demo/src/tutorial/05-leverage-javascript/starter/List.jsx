import { data } from "../../../data";

const List = () => {
	return (
		<div>
			<h2>List Component</h2>
			<ul>
				{data.map((person) => {
					return <li key={person.id}>{person.name}</li>;
				})}
			</ul>
		</div>
	);
};

export default List;
