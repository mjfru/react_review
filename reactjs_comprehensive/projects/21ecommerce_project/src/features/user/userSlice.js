import { createSlice } from "@reduxjs/toolkit";

const themes = {
	abyss: "abyss",
	fantasy: "fantasy",
};

const getLSUser = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
}

// Get the local storage value when the component mounts:
const getLSTheme = () => {
	const theme = localStorage.getItem("theme") || themes.fantasy;
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
};

const initialState = {
	user: getLSUser(),
	theme: getLSTheme(),
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginUser: (state, action) => {
			const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
		},
		logoutUser: (state) => {
			state.user = null;
      localStorage.removeItem('user');
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
