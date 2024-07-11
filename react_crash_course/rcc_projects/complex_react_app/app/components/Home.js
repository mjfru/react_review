import React, { useContext } from "react";
import Page from "./Page";
import StateContext from "../StateContext";

export default function () {
  const appState = useContext(StateContext);

  return (
    <Page title="Your Feed">
      <h2 className="text-center">
        Hello <strong>{appState.user.username}</strong>, your feed is empty.
      </h2>
      <p className="text-center lead text-muted">
        Your feed displays the latest posts from the people you follow. If you
        don&rsquo;t have any friends to follow that&rsquo;s okay; you can use
        the &ldquo;Search&rdquo; feature in the top menu bar to find content
        written by people with similar interests and then follow them.
      </p>
    </Page>
  );
}
