import { useReducer, useState } from "react";
import { data } from "../../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import reducer from "./reducer";

//! Default state, also for the useReducer hook
const defaultState = {
	people: data,
};

// //? Setting up variables to take the place of your actions is a nice way to eliminate typos and guesswork:
// const CLEAR_LIST = "CLEAR_LIST";
// const RESET_LIST = "RESET_LIST";
// const REMOVE_ITEM = "REMOVE_ITEM";

//! This reducer function will be passed into the useReducer hook
//* This gets the state and an action
// const reducer = (state, action) => {
	// Can use if or switch statements, use your preference:
// 	if (action.type === CLEAR_LIST) {
// 		return { ...state, people: [] };
// 	}
// 	if (action.type === RESET_LIST) {
// 		return { ...state, people: data };
// 	}
// 	if (action.type === REMOVE_ITEM) {
// 		let newPeople = state.people.filter(
// 			(person) => person.id !== action.payload.id
// 		);
// 		return { ...state, people: newPeople };
// 	}
	// Return state if actions don't match anything:
	// return state;
	// Or throw an error to help troubleshooting:
// 	throw new Error(`No matching "${action.type}" - action type.`);
// };

const ReducerBasics = () => {
	//! Getting started with useReducer
	//* We need to pass in a default state and a reducer, a function that manipulates the state
	//* With useReducer, we get back a state and a dispatch (rather than a set... function)
	const [state, dispatch] = useReducer(reducer, defaultState);

	// const [people, setPeople] = useState(data);

	const removeItem = (id) => {
		// let newPeople = people.filter((person) => person.id !== id);
		// setPeople(newPeople);
		dispatch({ type: REMOVE_ITEM, payload: { id } });
	};

	const clearList = () => {
		dispatch({ type: CLEAR_LIST });
		// setPeople([]);
	};

	const resetList = () => {
		dispatch({ type: RESET_LIST });
		// setPeople(data);
	};

	// console.log(state);

	return (
		<div>
			{state.people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id} className="item">
						<h4>{name}</h4>
						<button onClick={() => removeItem(id)}>remove</button>
					</div>
				);
			})}
			{state.people.length !== 0 ? (
				<button
					className="btn"
					style={{ marginTop: "2rem" }}
					onClick={clearList}
				>
					clear items
				</button>
			) : (
				<button
					className="btn"
					style={{ marginTop: "2rem" }}
					onClick={resetList}
				>
					reset
				</button>
			)}
		</div>
	);
};

export default ReducerBasics;
