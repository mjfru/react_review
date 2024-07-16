import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import { Tooltip } from "react-tooltip";

export default function HeaderLoggedIn() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleLogout() {
    appDispatch({ type: "logout" });
    // localStorage.removeItem("complexAppToken");
    // localStorage.removeItem("complexAppUsername");
    // localStorage.removeItem("complexAppAvatar");
  }

  function handleSearchIcon(e) {
    e.preventDefault();
    appDispatch({ type: "openSearch" });
  }

  return (
    <div className="flex-row my-3 my-md-0">
      <a
        onClick={handleSearchIcon}
        href="#"
        className="mr-2 text-white header-search-icon"
        data-tooltip-id="search"
        data-tooltip-content="Search"
      >
        <i className="fas fa-search"></i>
      </a>
      <Tooltip place="bottom" id="search" className="custom-tooltip" />{" "}
      <span
        data-tooltip-id="chat"
        data-tooltip-content="Chat"
        className="mr-2 text-white header-chat-icon"
      >
        <i className="fas fa-comment"></i>
        <span className="text-white chat-count-badge"> </span>
      </span>
      <Tooltip place="bottom" id="chat" className="custom-tooltip" />{" "}
      <Link
        data-tooltip-id="profile"
        data-tooltip-content="My Profile"
        to={`/profile/${appState.user.username}`}
        className="mr-2"
      >
        <img className="small-header-avatar" src={appState.user.avatar} />
      </Link>
      <Tooltip place="bottom" id="profile" className="custom-tooltip" />{" "}
      <Link className="mr-2 btn btn-sm btn-success" to="/create-post">
        Create Post
      </Link>{" "}
      <button className="btn btn-sm btn-secondary" onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  );
}
