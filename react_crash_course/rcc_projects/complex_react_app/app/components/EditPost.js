import React, { useEffect, useContext, useReducer, useState } from "react";
import { useImmerReducer } from "use-immer";
import Page from "./Page";
import LoadingDotsIcon from "./LoadingDotsIcon";
import { useParams } from "react-router-dom";
import axios from "axios";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

export default function ViewSinglePost() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  // What will we need to hold values?
  const originalState = {
    title: {
      value: "",
      hasErrors: false,
      message: "",
    },
    body: {
      value: "",
      hasErrors: false,
      message: "",
    },
    isFetching: true,
    isSaving: false,
    id: useParams().id,
    sendCount: 0,
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "fetchComplete":
        draft.title.value = action.value.title;
        draft.body.value = action.value.body;
        draft.isFetching = false;
        return;
      case "titleChange":
        draft.title.value = action.value;
        return;
      case "bodyChange":
        draft.body.value = action.value;
        return;
      case "submitRequest":
        draft.sendCount++;
        return;
      case "saveRequestStarted":
        draft.isSaving = true;
        return;
      case "saveRequestFinished":
        draft.isSaving = false;
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, originalState);

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: "submitRequest" });
  }

  useEffect(() => {
    const ourRequest = new AbortController();
    async function fetchPost() {
      try {
        const response = await axios.get(`/post/${state.id}/`, {
          signal: ourRequest.signal,
        });
        dispatch({ type: "fetchComplete", value: response.data });
        setPost(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("An error has occurred." + e);
      }
    }
    fetchPost();
    // Clean-up function; cancelling the axios request
    // When a component is unmounted, you want to clean up what this component was doing.
    return () => {
      ourRequest.abort();
    };
  }, []);

  useEffect(() => {
    if (state.sendCount) {
      dispatch({ type: "saveRequestStarted" });
      const ourRequest = new AbortController();
      async function fetchPost() {
        try {
          const response = await axios.post(
            `/post/${state.id}/edit`,
            {
              title: state.title.value,
              body: state.body.value,
              token: appState.user.token,
            },
            {
              signal: ourRequest.signal,
            }
          );
          dispatch({ type: "saveRequestFinished" });
          appDispatch({ type: "flashMessage", value: "Post was updated." });
          // setPost(response.data);
          // setIsLoading(false);
        } catch (e) {
          console.log("An error has occurred." + e);
        }
      }
      fetchPost();
      return () => {
        ourRequest.abort();
      };
    }
  }, [state.sendCount]);

  if (state.isFetching)
    return (
      <Page title="...">
        <LoadingDotsIcon />
      </Page>
    );

  return (
    <Page title="Edit Post">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="post-title" className="mb-1 text-muted">
            <small>Title</small>
          </label>
          <input
            onChange={(e) =>
              dispatch({ type: "titleChange", value: e.target.value })
            }
            value={state.title.value}
            autoFocus
            name="title"
            id="post-title"
            className="form-control form-control-lg form-control-title"
            type="text"
            placeholder=""
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="mb-1 text-muted d-block">
            <small>Body Content</small>
          </label>
          <textarea
            onChange={(e) =>
              dispatch({ type: "bodyChange", value: e.target.value })
            }
            value={state.body.value}
            name="body"
            id="post-body"
            className="body-content tall-textarea form-control"
            type="text"
          />
        </div>

        <button className="btn btn-primary" disabled={state.isSaving}>
          {state.isSaving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </Page>
  );
}
