import { useContext, useReducer, useEffect, createContext } from "react";
import { reducer } from "./reducer";
import cartItems from "./data";

import {
	CLEAR_CART,
	REMOVE,
	INCREASE,
	DECREASE,
	LOADING,
	DISPLAY_ITEM,
} from "./actions";
import { getTotals } from "./utils";
const url = "https://www.course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialState = {
	loading: false,
	// cart: [...cartItems],
	// cart: new Map(cartItems.map((item) => [item.id, item])),
	cart: new Map(),
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { totalAmount, totalCost } = getTotals(state.cart);

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};

	const remove = (id) => {
		dispatch({ type: REMOVE, payload: { id } });
	};

	const increase = (id) => {
		dispatch({ type: INCREASE, payload: { id } });
	};

	const decrease = (id) => {
		dispatch({ type: DECREASE, payload: { id } });
	};

	const fetchData = async () => {
		dispatch({ type: LOADING });
		const response = await fetch(url);
		const cart = await response.json();
		console.log(cart);
		dispatch({ type: DISPLAY_ITEM, payload: { cart } });
	};
	useEffect(() => {
		fetchData();
	}, []);

	// const greeting = "hello";
	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				remove,
				increase,
				decrease,
				totalAmount,
				totalCost,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
