import Axios from "axios";
import React, { useState, useContext } from "react";
import DispatchContext from "../DispatchContext";

export default function HeaderLoggedOut(props) {
  const appDispatch = useContext(DispatchContext);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/login", {
        username,
        password,
      });
      if (response.data) {
        appDispatch({ type: "login", data: response.data });
        appDispatch({ type: "flashMessage", value: "You have successfully logged in." })
      } else {
        console.log("Incorrect username/password");
        appDispatch({ type: "flashMessage", value: "Invalid username / password." })
      }
    } catch (e) {
      console.log("An error has occured.");
      console.log(e);
    }
  }

  return (
    <form className="pt-2 mb-0 pt-md-0" onSubmit={handleSubmit}>
      <div className="row align-items-center">
        <div className="mb-3 mr-0 col-md pr-md-0 mb-md-0">
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
        </div>
        <div className="mb-3 mr-0 col-md pr-md-0 mb-md-0">
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-auto">
          <button className="btn btn-success btn-sm">Sign In</button>
        </div>
      </div>
    </form>
  );
}
