import { useParams } from "react-router-dom";
// import movies from "../movies";
import axios from "axios";
import { useState, useEffect } from "react";

export function MoviePage() {
  const params = useParams();
  //  console.log(params);

  // const movie = movies.find((currentMovie) => {
  //   return currentMovie.id === Number(params.movieId);
  // });

  // se tivesse usado do movies.filter acima, se tornaria necessário acrescentar uma array vazia no final da função
  // essa solução foi feita para quando tinhámos os movies dentro do nosso arquivo vscode
  // abaixo é a solução utilizando de uma api externa

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=a82994610318fb07486debc05b5c3e7a`
      );
      //  console.log(response);
      setMovie(response.data);
    }
    fetchMovie();
  });

  return (
    <>
      <div class="p-3 mb-2 bg-dark-subtle text-emphasis-dark">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h1>{movie.original_title}</h1>
              <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <figure class="figure">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    class="figure-img img-fluid rounded"
                    alt="poster-img"
                  />
                  <figcaption class="figure-caption"></figcaption>
                </figure>
              </div>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
