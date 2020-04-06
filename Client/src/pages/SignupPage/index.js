import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import "./SignupPage.css";

const Example = (props) => {
  return (
      <Container className="signup-container">
          <h1>Sign Up</h1>
      <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Container>
  );
}

export default Example;