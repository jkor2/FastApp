import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function Footer() {
    const [signedInData, setSignedInData] = React.useState(false)

// Need to properly form footer section with proper content

  return (
    <Navbar className="bg-dark" style={{ minHeight: '10vh' }}>
      <Container>
        <Navbar.Brand href="#home" className='text-light' >Footer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light'>
            Signed in as: {" "} 
            <a href="/login" className='text-secondary'>
                {signedInData ? "Name" : "Guest"}
                </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;