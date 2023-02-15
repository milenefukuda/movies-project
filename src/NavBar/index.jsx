import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/hometv">
        <button>Tv Series</button>
      </Link>
    </div>
  );
}
