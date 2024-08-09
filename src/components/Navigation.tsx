import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="yellow"
      variant="yellow"
      className="mb-3"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          ⭐ Star Wars Encyclopedia
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/films?search=&page=1">
              🎥 Films
            </Nav.Link>
            <Nav.Link as={NavLink} to="/people?search=&page=1">
              😗 People
            </Nav.Link>
            <Nav.Link as={NavLink} to="/planets?search=&page=1">
              🌍 Planets
            </Nav.Link>
            <Nav.Link as={NavLink} to="/species?search=&page=1">
              👨‍👩‍👦 Species
            </Nav.Link>
            <Nav.Link as={NavLink} to="/starships?search=&page=1">
              🚀 Starships
            </Nav.Link>
            <Nav.Link as={NavLink} to="/vehicles?search=&page=1">
              🚜 Vehicles
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
