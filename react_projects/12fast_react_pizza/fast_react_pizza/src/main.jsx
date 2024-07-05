import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Providing Global state (using Redux) to the whole app tree */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
