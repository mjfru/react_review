import { useState, useEffect } from "react";
const KEY = "799bee64";

export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      callback?.();
      // Logic to pause sending an API request until typing slows down / stops:
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies :(");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found.");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          console.log(err);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
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
      // We want to cancel the current request each time a new one (key stroke changing the query) comes in.
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, error };
}
