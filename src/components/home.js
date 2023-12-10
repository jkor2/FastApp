import Container from 'react-bootstrap/Container';
import NavBar from './navbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


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

Embark on a transformative journey with FullyFasted, where each fasting moment becomes a step towards a healthier and more vibrant you. Whether you're a seasoned fasting enthusiast or just beginning to explore the benefits, we're thrilled to be your companion on this wellness adventure. <br/><br/>

At FullyFasted, we believe in the power of mindful fasting as a cornerstone of a balanced and thriving lifestyle. Our platform is crafted to provide you with the tools, community support, and knowledge needed to make your fasting experience not just effective but enjoyable. <br/>
<hr />
Let's make wellness a way of life! 🌿 <br/>
</p>



    </Alert>

    <div className='btn-hold-home'>

    <Button variant="outline-light w-50" >Get Started Today</Button>

</div>



        </Container>

        </div>
    </div>
  );
}

export default HomePage;
