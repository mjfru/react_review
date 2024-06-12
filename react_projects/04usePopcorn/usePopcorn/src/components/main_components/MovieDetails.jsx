import { useEffect, useState, useRef } from "react";
import StarRating from "../utility_components/StarRating";
import Loader from "./Loader";
import { useKey } from "../../useKey";

function MovieDetails({
  selectedId,
  onCloseMovie,
  KEY,
  onAddWatched,
  watched,
}) {
  // We get back an object from our API call, so we set the initial state to an empty object.
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  // useRef - Keep track of how many times a user changes their rating but don't display this information on the UI.
  // This will store the amount of clicks, initialized at 0.
  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current++;
    },
    // Each time the userRating changes, the ref updates as well, adding + 1
    [userRating]
  );

  // Derived State
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  // console.log(isWatched);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // console.log(title, year);

  //* Some useState & useEffect learning & experimentation:
  // React only looks at the initial state (rating > 8) once and, since nothing is rendered that would trigger this on the initial render, it will remain false.
  //? const [isTop, setIsTop] = useState(imdbRating > 8);
  //? console.log(isTop); // false
  // useEffect to the rescue!
  //? useEffect(
  //?   function () {
  //?     setIsTop(imdbRating > 8);
  //?   },
  //?   [imdbRating]
  //? );
  // What we should have done from the beginning, however, is use derived state...
  const isTop = imdbRating > 8;
  console.log(isTop);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
      // Remount whenever the selectedId changes
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `${title}`;
      //! Cleanup!
      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey('Escape', onCloseMovie);
  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (e.code === "Escape") {
  //         onCloseMovie();
  //       }
  //     }
  //     document.addEventListener("keydown", callback);

  //     //! Cleanup the event listener
  //     return function () {
  //       document.removeEventListener("keydown", callback);
  //     };
  //   },
  //   [onCloseMovie]
  // );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie.`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this movie {watchedUserRating} <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directed by: {director}</p>
          </section>
        </>
      )}
      {selectedId}
    </div>
  );
}

export default MovieDetails;
