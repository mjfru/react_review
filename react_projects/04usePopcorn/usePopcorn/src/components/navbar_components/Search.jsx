//! Stateful Component
import { useEffect, useRef } from "react";
import { useKey } from "../../useKey";

// import { useState } from "react";
function Search({ query, setQuery }) {
  //! The wrong' way to select elements in the DOM
  // useEffect(function () {
  //   const el = document.querySelector('.search');
  //   console.log(el);
  //   el.focus();
  // }, []);

  //! Introducing...useRef!
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (e.code === "Enter") {
  //         if (document.activeElement === inputEl.current) return;
  //         //? Auto-focusing on the searchbar, the 'right' way to select elements in the DOM.
  //         //? Adding a feature when a user hit their enter key, it focuses back to the search back.
  //         inputEl.current.focus();
  //         setQuery("");
  //       }
  //     }
  //     document.addEventListener("keydown", callback);
  //     return () => document.addEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );

  //! Moved to parent component
  // const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      //! Linked to the useRef now.
      ref={inputEl}
    />
  );
}

export default Search;
