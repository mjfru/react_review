import { useEffect, useState } from "react";
import Navbar from "./components/navbar_components/Navbar";
import Search from "./components/navbar_components/Search";
import NumResults from "./components/navbar_components/NumResults";
import Main from "./components/main_components/Main";
import Box from "./components/main_components/Box";
import Summary from "./components/main_components/Summary";
import MovieList from "./components/main_components/MovieList";
import WatchedList from "./components/main_components/WatchedList";
import Loader from "./components/main_components/Loader";
import ErrorMessage from "./components/main_components/ErrorMessage";
import Movie from "./components/main_components/Movie";
import MovieDetails from "./components/main_components/MovieDetails";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const KEY = "799bee64";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // Appears first in the code, will print second and only on the initial load.
  // useEffect(function () {
  //   console.log("After initial render");
  // }, []);

  // Prints last
  // useEffect(function () {
  //   console.log("After every render");
  // });
  // Effects run after the browser paint, so this will be first
  // console.log("During render");

  // useEffect(
  //   function () {
  //     console.log("D");
  //   },
  //   [query]
  // );

  function handleSelectMovie(id) {
    setSelectedId(selectedId => id === selectedId ? null : id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  //* Good practice, using useEffect to do something as soon as an application loads.
  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies :(");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found.");

          setMovies(data.Search);
        } catch (err) {
          console.log(err);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 1) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
    },
    [query]
  );

  //! Bad practice, this will continously re-render, an infinite loop of state-setting
  // fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
  //   .then((res) => res.json())
  //   .then((data) => console.log(data.Search))

  // setWatched([]);

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  return (
    <>
      {/* Component Composition~!~! Navbar receiving a children prop, Main receiving two, and Listbox receiving one within Main. */}
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie}/>}
          {error && <ErrorMessage message={error} />}
        </Box>

        {/* We can also do something like this, which is referred to as passing elements as props 
      <Main>
        <Box element={<MovieList movies={movies} />} /> 
            Box.jsx receives element as a prop.
      This kind of pattern is used with ReactRouter
      */}

        <Box>
          {selectedId ? (
            <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} KEY={KEY}/>
          ) : (
            <>
              <Summary watched={watched} average={average} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

export default App;
