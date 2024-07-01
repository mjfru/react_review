import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <header className="mb-3 header-bar bg-primary">
        <div className="container p-3 d-flex flex-column flex-md-row align-items-center">
          <h4 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/" className="text-white">
              ComplexApp
            </Link>
          </h4>
          {loggedIn ? (
            <HeaderLoggedIn setLoggedIn={setLoggedIn} />
          ) : (
            <HeaderLoggedOut setLoggedIn={setLoggedIn} />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
