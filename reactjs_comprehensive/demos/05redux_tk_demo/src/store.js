// Acts as state management for our entire app, similar to useContext, it will be used to wrap around our entire application
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {},
});

export default store;
