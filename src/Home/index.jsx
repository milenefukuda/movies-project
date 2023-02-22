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
      <div class="container text-center">
        <div class="row">
          <h1>Movies</h1>

          {movies.map((currentMovie) => {
            return (
              <>
                <div key={currentMovie.id} className="col-md-4">
                  <Link to={`/movie/${currentMovie.id}`}>
                    <h2>{currentMovie.original_title}</h2>
                    <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                      <figure class="figure">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${currentMovie.backdrop_path}`}
                          class="figure-img img-fluid rounded"
                          alt="poster-img"
                        />
                        <figcaption class="figure-caption"></figcaption>
                      </figure>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
