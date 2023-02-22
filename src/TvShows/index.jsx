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
      <div class="container text-center">
        <div class="row">
          <h1>TV Shows</h1>

          {tvshows.map((currentShow) => {
            return (
              <>
                <div key={currentShow.id} className="col-md-4">
                  <Link to={`/tv/${currentShow.id}`}>
                    <h2>{currentShow.original_name}</h2>
                    <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                      <figure class="figure">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${currentShow.backdrop_path}`}
                          class="figure-img img-fluid rounded"
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
