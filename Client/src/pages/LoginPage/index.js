import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import "./LoginPage.css";
import login from "../../utils/API";

// const LoginFunc = () => {
//   const data = {
//     email: "email",
//     password: "test"
//   };
//   login.login(data).then(res => console.log(res)).catch(err => console.log(err))
// }
const meme = console.log(Input.text);

const Example = (props) => {
  return (
      <Container className="login-container">
          <h1>Login</h1>
      <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      <Button onClick={meme}>Submit</Button>
    </Form>
    </Container>
  );
}

export default Example;