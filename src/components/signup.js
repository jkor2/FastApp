import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React from "react";

function Signup() {
  const [userData, setUserData] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    username: "",
    confirmpassword: "",
    height: "",
    weight: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("Connected");
    e.preventDefault();
  };

  return (
    <div className="singup-hold">
      <Container
        fluid
        className=" bg-dark w-100 h-100 d-flex text-light flex-column justify-content-center align-items-center"
      >
        <Container className="bg-dark w-25 d-flex justify-content-center align-items-center ">
          <h1>FullyFasted</h1>
        </Container>
        <Container className="bg-dark w-50 mb-3 d-flex justify-content-center align-items-center text-center ">
          <h5>Get Started Here!</h5>
        </Container>

        <Form action="/signup" method="post" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                id="fname"
                type="text"
                placeholder="Enter First Name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                id="lname"
                type="text"
                placeholder="Enter Last Name"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                id="username"
                type="username"
                placeholder="Enter Username"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label> Confirm Password</Form.Label>
              <Form.Control
                id="confirmpassword"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridHeight">
              <Form.Label>Height (in)</Form.Label>
              <Form.Control
                id="height"
                type="number"
                placeholder="Enter Height"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridWeight">
              <Form.Label>Weight (lbs)</Form.Label>
              <Form.Control
                id="weight"
                type="number"
                placeholder="Enter Weight"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="w-100 mt-4">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;
