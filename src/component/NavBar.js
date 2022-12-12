import { Container, Nav, Navbar, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="position-fixed top-0 w-100 bg-transparent"
      style={{ height: 100, zIndex: 2 }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="./img/Icon.png" alt="Dewe Tour" />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button
            variant="outline-light"
            className="mx-2"
            style={{ width: 150 }}
          >
            Login
          </Button>
          <Button
            variant="warning"
            className="text-white mx-2"
            style={{ width: 150 }}
          >
            Register
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
