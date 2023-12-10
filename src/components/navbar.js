import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="false" className="bg-dark">
      <Container className='navbar-dark'>
        <Navbar.Brand href="#home" className='fs-3 fw-bolder'>FullyFasted</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto bg-dark" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Articles</Nav.Link>
            <Nav.Link href="#link">Community Posts</Nav.Link>
            <Nav.Link href="#link">Guides</Nav.Link>
            <Nav.Link href="#link">Recipes</Nav.Link>
            <Nav.Link href="#link">Tips and Tricks</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown"   data-bs-theme="dark"         className="mt-2"
 variant="secondary"
>
              <NavDropdown.Item href="#action/3.1" >8 Hour Fast</NavDropdown.Item>
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
