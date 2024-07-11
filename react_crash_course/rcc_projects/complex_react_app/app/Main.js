import React, { useState, useReducer, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useImmerReducer } from "use-immer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

// Contexts:
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

// Components:
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import FlashMessages from "./components/FlashMessages";
import ViewSinglePost from "./components/ViewSinglePost";
import Profile from "./components/Profile";

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("complexAppToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("complexAppToken"),
      username: localStorage.getItem("complexAppUsername"),
      avatar: localStorage.getItem("complexAppAvatar"),
    },
  };

  // Immer gives us a copy of state we are free to change and modify; it then hands it off to React when we're doing.
  function ourReducer(state, action) {
    switch (action.type) {
      case "login":
        state.loggedIn = true;
        state.user = action.data;
        return;
      // return { loggedIn: true, flashMessages: state.flashMessages };
      case "logout":
        state.loggedIn = false;
        return;
      case "flashMessage":
        state.flashMessages.push(action.value);
        return;
      // return {
      //   loggedIn: state.loggedIn,
      //   flashMessages: state.flashMessages.concat(action.value),
      // };
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem("complexAppToken", state.user.token);
      localStorage.setItem("complexAppUsername", state.user.username);
      localStorage.setItem("complexAppAvatar", state.user.avatar);
    } else {
      localStorage.removeItem("complexAppToken", state.user.token);
      localStorage.removeItem("complexAppUsername", state.user.username);
      localStorage.removeItem("complexAppAvatar", state.user.avatar);
    }
  }, [state.loggedIn]);

  return (
    //? Whatever we include in the value, any child component will be able to acces it
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Routes>
            <Route path="/profile/:username/*" element={<Profile />} />
            <Route
              path="/"
              element={state.loggedIn ? <Home /> : <HomeGuest />}
            />
            <Route path="/post/:id" element={<ViewSinglePost />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
