/* eslint-disable react/prop-types */
import Person from "./Person";

const List = ({ people }) => {
	return (
		<div>
			{people.map((person) => {
				const { id, name, age, image } = person;
				return <Person key={id} name={name} age={age} image={image} />;
			})}
		</div>
	);
};

export default List;
