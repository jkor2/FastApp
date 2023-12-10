import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button  from 'react-bootstrap/Button';
import React from 'react';

function NavBar() {
  const [signedInData, setSignedInData] = React.useState(false)

  return (
    <Navbar expand="false" className="bg-dark text-white">
      <Container className='navbar-dark text-white flex-d'>
      
      <Navbar.Brand href="/" className='fs-3 fw-bolder'>FullyFasted</Navbar.Brand>
        

        <div className='hold-login-home'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark text-white"/>
        
        { /** Will be user icon when signed in, else, login button will be posted*/}
        {signedInData ? "Signed In" : <Button variant="outline-light" href="/login">Login</Button>}
        
        </div>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto bg-dark text-white" >
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/articles" >Articles</Nav.Link>
            <Nav.Link href="/community">Community Posts</Nav.Link>
            <Nav.Link href="/guides">Guides</Nav.Link>
            <Nav.Link href="/recipes">Recipes</Nav.Link>
            <Nav.Link href="/tipsandtricks">Tips and Tricks</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown"   data-bs-theme="dark" className="mt-2"
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
