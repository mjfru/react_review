import React from "react";

export default function HeaderLoggedIn({ setLoggedIn }) {
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
          src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"
        />
      </a>
      <a className="mr-2 btn btn-sm btn-success" href="/create-post">
        Create Post
      </a>
      <button className="btn btn-sm btn-secondary" onClick={() => setLoggedIn(false)}>Sign Out</button>
    </div>
  );
}
