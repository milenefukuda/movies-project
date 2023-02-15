import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export function TvPage() {
  const paramns = useParams();

  const [tvshow, setTvshow] = useState({});

  useEffect(() => {
    async function fetchTvShow() {
      const responseShow = await axios.get(
        `https://api.themoviedb.org/3/tv/${paramns.tvId}?api_key=a82994610318fb07486debc05b5c3e7a`
      );
      setTvshow(responseShow.data);
    }
    fetchTvShow();
  });

  return (
    <>
      <h1>{tvshow.original_name}</h1>
      <p>{tvshow.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${tvshow.backdrop_path}`}
        alt="poster-img"
      />
    </>
  );
}
