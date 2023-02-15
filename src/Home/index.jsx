//import movies from "../movies";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=a82994610318fb07486debc05b5c3e7a"
      );
      setMovies(response.data.results);
    }
    fetchMovies();
  }, []);

  // USANDO GET E THEN

  // useEffect(() => {
  //   const apiResponse = axios
  //     .get(
  //       "https://api.themoviedb.org/3/discover/movie?api_key=a82994610318fb07486debc05b5c3e7a"
  //     )
  //     .then((delivery) => {
  //       setMovies(delivery.data.results);
  //     });
  // }, []);

  return (
    <>
      <h1>Home Filmes</h1>

      {movies.map((currentMovie) => {
        return (
          <Link key={currentMovie.id} to={`/movie/${currentMovie.id}`}>
            <h2>{currentMovie.original_title}</h2>
          </Link>
        );
      })}
    </>
  );
}
