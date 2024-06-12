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
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

const KEY = "799bee64";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const { movies, isLoading, error } = useMovies(query, handleCloseMovie);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              KEY={KEY}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} average={average} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
export default App;