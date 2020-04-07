import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import "./SignupPage.css";
import API from "../../utils/API";
import { Redirect, useHistory } from 'react-router-dom';


const SignupForm = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    // console.log("username is " + username);
    // console.log("password is " + password);
    API.signUp({
      email: username, password: password
    }).then(response => {
      // if response.data.success === true

      if (response.status === 200) {
        console.log("Works")
        return history.push("/login")
      } else {
        console.log("There was an error signing up");
      }
      // redirect the user to the login page 
    });
  };
  return (
    <Container className="signup-container">
      <h1 className="signup-text">SIGN UP</h1>
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

export default SignupForm;