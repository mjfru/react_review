import { data } from "../../../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";

//! This reducer function will be passed into the useReducer hook
//* This gets the state and an action
const reducer = (state, action) => {
	// Can use if or switch statements, use your preference:
	if (action.type === CLEAR_LIST) {
		return { ...state, people: [] };
	}
	if (action.type === RESET_LIST) {
		return { ...state, people: data };
	}
	if (action.type === REMOVE_ITEM) {
		let newPeople = state.people.filter(
			(person) => person.id !== action.payload.id
		);
		return { ...state, people: newPeople };
	}
	// Return state if actions don't match anything:
	// return state;
	// Or throw an error to help troubleshooting:
	throw new Error(`No matching "${action.type}" - action type.`);
};

export default reducer;
