import React, { Component } from "react";

function Container({ children, wide }) {
  return (
    <div
      className={"container py-md-5 " + (wide ? "" : "container--narrow")}
    >
      {children}
    </div>
  );
}

export default Container;
