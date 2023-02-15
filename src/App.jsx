import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { MoviePage } from "./MoviePage";
import { NavBar } from "./NavBar";
import { TvShows } from "./TvShows";
import { TvPage } from "./TvPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        <Route path="/hometv" element={<TvShows />} />
        <Route path="/tv/:tvId" element={<TvPage />} />
      </Routes>
    </>
  );
}

export default App;
