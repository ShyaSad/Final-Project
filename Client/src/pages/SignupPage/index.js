import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import "./SignupPage.css";
import signup from "../../utils/API";

const SignupFunc = () => {
  const data = {
    email: "email",
    password: "test"
  };
  signup.signup(data).then(res => console.log(res)).catch(err => console.log(err))
}

const Example = (props) => {
  return (
      <Container className="signup-container">
          <h1 className="signup-text">SIGN UP</h1>
      <Form>
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      <Button className="center" onClick={SignupFunc}>Submit</Button>
    </Form>
    </Container>
  );
}

export default Example;