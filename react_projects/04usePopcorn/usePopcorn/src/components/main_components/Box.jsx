//! Stateful Component
import { useState } from "react";
import MovieList from "./MovieList";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {/* Component composition here so we can just give <Movie /> the appropriate props without drilling down multiple layers. */}
      {isOpen && children}
    </div>
  );
}

export default Box;