import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import FlashMessages from "./components/FlashMessages";
import ViewSinglePost from "./components/ViewSinglePost";
import ExampleContext from "./ExampleContext";

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("complexAppToken")),
    flashMessages: [],
  };

  function ourReducer(state, action) {
    switch (action.type) {
      case "login":
        return { loggedIn: true, flashMessages: state.flashMessages };
      case "logout":
        return { loggedIn: false, flashMessages: state.flashMessages };
      case "flashMessage":
        return {
          loggedIn: state.loggedIn,
          flashMessages: state.flashMessages.concat(action.value),
        };
    }
  }

  const [state, dispatch] = useReducer(ourReducer, initialState);

  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexAppToken"))
  );
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessage(msg) {
    // Concat doesn't modify or change anything; returns a new array
    setFlashMessages((prev) => prev.concat(msg));
  }

  return (
    //? Whatever we include in the value, any child component will be able to acces it
    <ExampleContext.Provider value={{ addFlashMessage, setLoggedIn }}>
      <BrowserRouter>
        <FlashMessages messages={flashMessages} />
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={loggedIn ? <Home /> : <HomeGuest />} />
          <Route path="/post/:id" element={<ViewSinglePost />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ExampleContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<Main />);

if (module.hot) {
  module.hot.accept();
}
