import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="false" className="bg-dark">
      <Container className='navbar-dark'>
        <Navbar.Brand href="/" className='fs-3 fw-bolder'>FullyFasted</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto bg-dark" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/articles">Articles</Nav.Link>
            <Nav.Link href="/community">Community Posts</Nav.Link>
            <Nav.Link href="/guides">Guides</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/tipsandtricks">Tips and Tricks</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown"   data-bs-theme="dark"         className="mt-2"
 variant="secondary"
>
              <NavDropdown.Item href="/resources/eighthour" >8 Hour Fast</NavDropdown.Item>
              <NavDropdown.Item href="/resources/twelevehour">12 Hour Fast</NavDropdown.Item>
              <NavDropdown.Item href="/resources/twentyfourhour">24 Hour Fast</NavDropdown.Item>
              <NavDropdown.Item href="/resources/thirtysixhour">36 Hour Fast</NavDropdown.Item>
              <NavDropdown.Item href="/resources/waterfast">Water Fast</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
