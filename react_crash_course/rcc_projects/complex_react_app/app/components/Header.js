import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";
import StateContext from "../StateContext";

function Header(props) {
  const appState = useContext(StateContext);

  return (
    <>
      <header className="mb-3 header-bar bg-primary">
        <div className="container p-3 d-flex flex-column flex-md-row align-items-center">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              ComplexApp
            </Link>
          </h4>
          {appState.loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        </div>
      </header>
    </>
  );
}

export default Header;
