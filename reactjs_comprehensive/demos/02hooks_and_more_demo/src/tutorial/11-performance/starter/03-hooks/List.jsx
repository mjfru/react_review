import { memo } from "react";
import Item from "./Person";

// memo() checks to see if the specificied props have changed. If they haven't the component will not re-render.
const List = ({ people, removePerson }) => {
	return (
		<div>
			{people.map((person) => {
				return <Item key={person.id} {...person} removePerson={removePerson} />;
			})}
		</div>
	);
};

// Despite using memo(), removing a person will trigger a re-render, the value is not changing but the removePerson function is created each time and React notices this.
export default memo(List);
