import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import "./LoginPage.css";
import login from "../../utils/API";

const LoginFunc = () => {
  const data = {
    email: "email",
    password: "test"
  };
  login.login(data).then(res => console.log(res)).catch(err => console.log(err))
}

const Example = (props) => {
  return (
      <Container className="login-container">
          <h1 className="login-text">LOGIN</h1>
      <Form>
      <FormGroup>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      <Button className="center" onClick={LoginFunc}>Submit</Button>
    </Form>
    </Container>
  );
}

export default Example;