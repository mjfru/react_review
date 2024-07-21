import React, { useEffect, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { useImmerReducer } from "use-immer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.baseURL = process.env.BACKENDURL || "";

// Contexts:
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";

// Components:
import Header from "./components/Header";
import HomeGuestV2 from "./components/HomeGuestV2";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";
const CreatePost = React.lazy(() => import("./components/CreatePost"));
import FlashMessages from "./components/FlashMessages";
const ViewSinglePost = React.lazy(() => import("./components/ViewSinglePost"));
// import Search from "./components/Search";
const Search = React.lazy(() => import("./components/Search"));
import Profile from "./components/Profile";
import EditPost from "./components/EditPost";
import NotFound from "./components/NotFound";
const Chat = React.lazy(() => import("./components/Chat"));
// import Chat from "./components/Chat";
import LoadingDotsIcon from "./components/LoadingDotsIcon";

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("complexAppToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("complexAppToken"),
      username: localStorage.getItem("complexAppUsername"),
      avatar: localStorage.getItem("complexAppAvatar"),
    },
    isSearchOpen: false,
    isChatOpen: false,
    unreadChatCount: 0,
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
      case "openSearch":
        state.isSearchOpen = true;
        return;
      case "closeSearch":
        state.isSearchOpen = false;
      case "toggleChat":
        state.isChatOpen = !state.isChatOpen;
        return;
      case "closeChat":
        state.isChatOpen = false;
        return;
      case "incrementUnreadChatCount":
        state.unreadChatCount++;
        return;
      case "clearUnreadChatCount":
        state.unreadChatCount = 0;
        return;
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

  // Check if token has expired on first render
  useEffect(() => {
    if (state.loggedIn) {
      const ourRequest = axios.CancelToken.source();
      async function fetchResults() {
        try {
          const response = await axios.post(
            "/checkToken",
            { token: state.user.token },
            { cancelToken: ourRequest.token }
          );
          if (!response.data) {
            dispatch({ type: "logout" });
            dispatch({
              type: "flashMessage",
              value: "Your session has expired. Please log in again.",
            });
          }
        } catch (e) {
          console.log("There was a problem or the request was cancelled.");
        }
      }
      fetchResults();
      return () => ourRequest.cancel();
    }
  }, []);

  return (
    //? Whatever we include in the value, any child component will be able to acces it
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages} />
          <Header />
          <Suspense fallback={<LoadingDotsIcon />}>
            <Routes>
              <Route path="/profile/:username/*" element={<Profile />} />
              <Route
                path="/"
                element={state.loggedIn ? <Home /> : <HomeGuestV2 />}
              />
              <Route path="/post/:id" element={<ViewSinglePost />} />
              <Route path="/post/:id/edit" element={<EditPost />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          <CSSTransition
            timeout={330}
            in={state.isSearchOpen}
            classNames="search-overlay"
            unmountOnExit
          >
            <div className="search-overlay">
              <Suspense fallback="">
                <Search />
              </Suspense>
            </div>
            {/* <Search /> */}
          </CSSTransition>

          <Suspense fallback="">{state.loggedIn && <Chat />}</Suspense>
          {/* <Chat /> */}
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
