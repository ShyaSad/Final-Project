import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import "./LoginPage.css";
import API from "../../utils/API";


const LoginForm = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
    API.login({
      email: username, password
    }).then(response => {
      // redirect the user to the login page 

      // if response.data.success === true
      console.log(response)
    });
  };
  return (
    <Container className="login-container">
      <h1 className="login-text">LOGIN</h1>
      <Form>
        <FormGroup>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={e => setUsername(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </FormGroup>
        <Button className="center" onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

export default LoginForm;