import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function TvShows() {
  const [tvshows, setTvShows] = useState([]);

  useEffect(() => {
    async function fetchTvShows() {
      const responseTv = await axios.get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=a82994610318fb07486debc05b5c3e7a"
      );
      setTvShows(responseTv.data.results);
    }
    fetchTvShows();
  }, []);

  return (
    <>
      <h1>Tv Series</h1>

      {tvshows.map((currentShow) => {
        return (
          <Link key={currentShow.id} to={`/tv/${currentShow.id}`}>
            <h2>{currentShow.original_name}</h2>
          </Link>
        );
      })}
    </>
  );
}
