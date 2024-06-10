//! Stateful Component 
// import { useState } from "react";
function Search({ query, setQuery }) {

  //! Moved to parent component
  // const [query, setQuery] = useState("");
  return (
    <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
  )
}

export default Search;