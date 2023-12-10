import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="false" className="bg-body-tertiary">
      <Container  >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Articles</Nav.Link>
            <Nav.Link href="#link">Community Posts</Nav.Link>
            <Nav.Link href="#link">Guides</Nav.Link>
            <Nav.Link href="#link">Recipes</Nav.Link>
            <Nav.Link href="#link">Tips and Tricks</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">8 Hour Fast</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">12 Hour Fast</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">24 Hour Fast</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">36 Hour Fast</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Water Fast</NavDropdown.Item>



            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

