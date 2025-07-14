import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: { username: "user" },
	theme: "abyss",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			console.log("login");
		},
		logoutUser: (state) => {
			console.log("logout");
		},
		toggleTheme: (state) => {
			console.log("toggle theme");
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
