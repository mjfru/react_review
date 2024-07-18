import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Page from "./Page";
import LoadingDotsIcon from "./LoadingDotsIcon";
import StateContext from "../StateContext";
import { useImmer } from "use-immer";
import Post from "./Post";

export default function () {
  const appState = useContext(StateContext);
  const [state, setState] = useImmer({
    isLoading: true,
    feed: [],
  });

  useEffect(() => {
    const ourRequest = new AbortController();
    async function fetchData() {
      try {
        const response = await axios.post("/getHomeFeed", {
          token: appState.user.token,
        });
        setState((draft) => {
          draft.isLoading = false;
          draft.feed = response.data;
        });
      } catch (e) {
        console.log("An error has occurred.");
      }
    }
    fetchData();
    return () => {
      ourRequest.abort();
    };
  }, []);

  if (state.isLoading) {
    return <LoadingDotsIcon />;
  }

  return (
    <Page title="Your Feed">
      {state.feed.length > 0 && (
        <>
          <h2 className="mb-4 text-center">The Latest From Those You Follow</h2>
          <div className="list-group">
            {state.feed.map((post) => {
              return <Post post={post} key={post._id} />;
            })}
          </div>
        </>
      )}
      {state.feed.length == 0 && (
        <>
          <h2 className="text-center">
            Hello <strong>{appState.user.username}</strong>, your feed is empty.
          </h2>
          <p className="text-center lead text-muted">
            Your feed displays the latest posts from the people you follow. If
            you don&rsquo;t have any friends to follow that&rsquo;s okay; you
            can use the &ldquo;Search&rdquo; feature in the top menu bar to find
            content written by people with similar interests and then follow
            them.
          </p>
        </>
      )}
    </Page>
  );
}
