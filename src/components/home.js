import Container from 'react-bootstrap/Container';
import NavBar from './navbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Row, Col, Card } from 'react-bootstrap';


function HomePage() {
  return (
    <div>
        <NavBar/>
<div className='holder-home'>
        <Container className="mt-3 " >
       
        <Alert variant="info">
      <Alert.Heading >Hey, nice to see you!</Alert.Heading>
      <p className='fs-5'>
      🌟 Welcome to FullyFasted – Your Gateway to Holistic Well-Being! 🌟 <br/>

At FullyFasted, we believe in the power of mindful fasting as a cornerstone of a balanced and thriving lifestyle. Our platform is crafted to provide you with the tools, community support, and knowledge needed to make your fasting experience not just effective but enjoyable. <br/>
<hr />
Let's make wellness a way of life! 🌿 <br/>
</p>

    </Alert>

    <div className='btn-hold-home'>

    <Container>
      <Row>
      <Col lg={6} md={12}>
          <Card className='mt-2 bg-dark text-light'>
            <Card.Header as="h5">Featured Article</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="light" className='btn-outline-secondary'>View Now</Button>
              </Card.Body>
          </Card>
        </Col>

        <Col lg={6} md={12}>
          <Card className='mt-2 bg-dark text-light'>
            <Card.Header as="h5">Featured Community Post</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="light" className='btn-outline-secondary'>View Now</Button>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
</div>



        </Container>

        </div>
    </div>
  );
}

export default HomePage;
