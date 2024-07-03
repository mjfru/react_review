import React from "react";
import { Link } from "react-router-dom";

export default function HeaderLoggedIn({ setLoggedIn }) {
  function handleLogout() {
    setLoggedIn(false);
    localStorage.removeItem("complexAppToken");
    localStorage.removeItem("complexAppUsername");
    localStorage.removeItem("complexAppAvatar");
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
      <a href="#" className="mr-2">
        <img
          className="small-header-avatar"
          src={localStorage.getItem("complexAppAvatar")}
        />
      </a>
      <Link className="mr-2 btn btn-sm btn-success" to="/create-post">
        Create Post
      </Link>
      <button className="btn btn-sm btn-secondary" onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  );
}
