// Acts as state management for our entire app, similar to useContext, it will be used to wrap around our entire application
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default store;
