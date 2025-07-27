// Acts as state management for our entire app, similar to useContext, it will be used to wrap around our entire application
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		modal: modalReducer,
	},
});

export default store;
