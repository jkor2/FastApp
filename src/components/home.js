import Container from 'react-bootstrap/Container';
import NavBar from './navbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Row, Col, Card } from 'react-bootstrap';
import Footer from './footer';

function HomePage() {
  return (
    <div>
        <NavBar/>
<div className='holder-home'>
        <Container className="mt-4 " >
       
        <Alert variant="info" className='mb-5'>
      <Alert.Heading >Hey, nice to see you!</Alert.Heading>
      <p className='fs-5'>
      🌟 Welcome to FullyFasted – Your Gateway to Holistic Well-Being! 🌟 <br/>

At FullyFasted, we believe in the power of mindful fasting as a cornerstone of a balanced and thriving lifestyle. Our platform is crafted to provide you with the tools, community support, and knowledge needed to make your fasting experience not just effective but enjoyable. <br/>
<hr />
Let's make wellness a way of life! 🌿 <br/>
</p>

    </Alert>

    <Card className='bg-dark text-light mb-5'>
      <Card.Header>Quote of the Day</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
          To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.
          </p>
          <hr/>
          <footer className="blockquote-footer">
            Buddha
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

    <div className='btn-hold-home'>

    <Container className='mt-4'>
      <div className='articles-hold-title-home'><h3 className='text-light mb-4'>Featured Articles</h3></div>

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
      </Row>
    </Container>

</div>

<div className='articles-hold-title-home mt-4 mb-5'><Button variant="light" className='btn-outline-secondary btn-lg '>Read More</Button></div>


<div className='articles-hold-title-home mt-6 mt-3'><h3 className='text-light mt-5 mb-3'>What is FullyFasted?</h3></div>


<Alert variant="none" className='bg-dark text-light'>
      <p className='fs-4'>

      FullyFasted stands as a comprehensive wellness platform committed to guiding individuals on their journey toward a healthier lifestyle through the practice of intermittent fasting. Built on the belief that mindful fasting can significantly contribute to improved health, energy levels, and sustainable weight management, FullyFasted offers a wealth of resources tailored for both newcomers and seasoned enthusiasts of intermittent fasting.<br/><br/>
      Our platform provides a diverse range of content, including informative articles, expert guides, and a vibrant community forum, making it a valuable destination for anyone looking to explore effective fasting methods and connect with like-minded individuals. From practical tips to a variety of recipes, FullyFasted serves as a go-to hub for those seeking not only knowledge but also a supportive community to share experiences and find encouragement on their unique wellness journey. Whether you're just beginning your fasting adventure or looking to refine your practices, FullyFasted is dedicated to being a reliable companion, helping you achieve a healthier, more balanced life through the practice of mindful fasting. Join us as we explore the transformative power of intentional fasting together.
      </p>

    </Alert>

    <div className='articles-hold-title-home mt-4 mb-5'><Button variant="light" className='btn-outline-secondary btn-lg mb-5 '>About Us</Button></div>

        </Container>



<Footer/>
        </div>
        

    </div>
  );
}

export default HomePage;
