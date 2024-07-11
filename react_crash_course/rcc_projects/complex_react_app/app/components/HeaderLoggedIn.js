import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

export default function HeaderLoggedIn() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleLogout() {
    appDispatch({ type: "logout" });
    // localStorage.removeItem("complexAppToken");
    // localStorage.removeItem("complexAppUsername");
    // localStorage.removeItem("complexAppAvatar");
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a href="#" className="mr-2 text-white header-search-icon">
        <i className="fas fa-search"></i>
      </a>
      <span className="mr-2 text-white header-chat-icon">
        <i className="fas fa-comment"></i>
        <span className="text-white chat-count-badge"> </span>
      </span>
      <Link to={`/profile/${appState.user.username}`} className="mr-2">
        <img
          className="small-header-avatar"
          src={appState.user.avatar}
        />
      </Link>
      <Link className="mr-2 btn btn-sm btn-success" to="/create-post">
        Create Post
      </Link>
      <button className="btn btn-sm btn-secondary" onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  );
}
