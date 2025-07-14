import { createSlice } from "@reduxjs/toolkit";

const themes = {
	abyss: "abyss",
	fantasy: "fantasy",
};

// Get the local storage value when the component mounts:
const getLSTheme = () => {
	const theme = localStorage.getItem("theme") || themes.fantasy;
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};

const initialState = {
	user: { username: "user" },
	theme: getLSTheme(),
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
			const { abyss, fantasy } = themes;
			state.theme = state.theme === fantasy ? abyss : fantasy;
			document.documentElement.setAttribute("data-theme", state.theme);
			localStorage.setItem("theme", state.theme);
		},
	},
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
