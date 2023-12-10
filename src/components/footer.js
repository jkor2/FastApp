import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
  return (
    <Navbar className="bg-dark" style={{ minHeight: '10vh' }}>
      <Container>
        <Navbar.Brand href="#home" className='text-light' >Footer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-light'>
            Signed in as: <a href="#login" className='text-secondary'>Guest</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;