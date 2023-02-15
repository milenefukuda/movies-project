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
      <h1>{movie.original_title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="poster-img"
      />
    </>
  );
}
