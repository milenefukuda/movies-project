import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Movies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/hometv">TV Shows</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
