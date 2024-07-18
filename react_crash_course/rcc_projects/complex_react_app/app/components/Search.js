import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useImmer } from "use-immer";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import Post from "./Post";

export default function Search() {
  const appDispatch = useContext(DispatchContext);

  // Allow us to create an object of initial values and lets us update just one of them in an immutable way.
  const [state, setState] = useImmer({
    searchTerm: "",
    results: [],
    show: "neither",
    requestCount: 0,
  });

  function searchKeyPressHandler(e) {
    if (e.keyCode === 27) {
      appDispatch({ type: "closeSearch" });
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", searchKeyPressHandler);
    // Cleaning up:
    return () => document.removeEventListener("keyup", searchKeyPressHandler);
  }, []);

  useEffect(() => {
    if (state.searchTerm.trim()) {
      setState((draft) => {
        draft.show = "loading";
      });
      const delay = setTimeout(() => {
        setState((draft) => {
          draft.requestCount++;
        });
      }, 800);
      // Cleanup function so a query is not set on every key press
      return () => clearTimeout(delay);
    } else {
      setState((draft) => {
        draft.show = "neither";
      });
    }
  }, [state.searchTerm]);

  useEffect(() => {
    if (state.requestCount) {
      // Making a cancel token variable to cancel the axios request if this compount unmounts in the middle of making it.
      const ourRequest = axios.CancelToken.source();

      async function fetchResults() {
        try {
          const response = await axios.post(
            // The URL we're sending a request to:
            "/search",
            // Data we want to send along; expecting a property of searchTerm
            { searchTerm: state.searchTerm },
            // Cancel token
            { cancelToken: ourRequest.token }
          );
          setState((draft) => {
            draft.results = response.data;
            draft.show = "results";
          });
        } catch (e) {
          console.log("There was a problem or the request was cancelled.");
        }
      }
      fetchResults();
      // Cleanup
      return () => ourRequest.cancel();
    }
  }, [state.requestCount]);

  function handleInput(e) {
    const value = e.target.value;
    setState((draft) => {
      draft.searchTerm = value;
    });
  }

  return (
    <>
      <div className="search-overlay">
        <div className="shadow-sm search-overlay-top">
          <div className="container container--narrow">
            <label htmlFor="live-search-field" className="search-overlay-icon">
              <i className="fas fa-search"></i>
            </label>
            <input
              onChange={handleInput}
              autoFocus
              type="text"
              autoComplete="off"
              id="live-search-field"
              className="live-search-field"
              placeholder="What are you interested in?"
            />
            <span
              onClick={() => appDispatch({ type: "closeSearch" })}
              className="close-live-search"
            >
              <i className="fas fa-times-circle"></i>
            </span>
          </div>
        </div>

        <div className="search-overlay-bottom">
          <div className="container py-3 container--narrow">
            <div
              className={
                "circle-loader " +
                (state.show == "loading" ? "circle-loader--visible" : "")
              }
            ></div>

            <div
              className={
                "live-search-results " +
                (state.show == "results" ? "live-search-results--visible" : "")
              }
            >
              {Boolean(state.results.length) && (
                <div className="shadow-sm list-group">
                  <div className="list-group-item active">
                    <strong>Search Results</strong> ({state.results.length}{" "}
                    {state.results.length > 1 ? "items " : "item "}
                    found)
                  </div>

                  {state.results.map((post) => {
                    return (
                      <Post
                        post={post}
                        key={post._id}
                        onClick={() => appDispatch({ type: "closeSearch" })}
                      />
                    );
                  })}
                </div>
              )}
              {!Boolean(state.results.length) && (
                <p className="text-center shadow-sm alert alert-danger">
                  Sorry, we could not find any results for that search.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
