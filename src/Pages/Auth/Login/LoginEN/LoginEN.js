import './LoginEN.css' 
import React from 'react';
import { Container, Form, Button, FormGroup, FormControl, FormCheck } from 'react-bootstrap';

const LoginEN = () => {
  return (
    <Container className="register-photo">
      <Container className="form-container">
        <Container className="image-holder">
          {/* Add your image here */}
        </Container>
        <Form className="form" method="post">
          <h2 className="text-center"><strong>Create</strong> an account.</h2>
          <FormGroup className="form-group">
            <FormControl type="email" name="email" placeholder="Email" className="form-control" />
          </FormGroup>
          <FormGroup className="form-group">
            <FormControl type="password" name="password" placeholder="Password" className="form-control" />
          </FormGroup>
          <FormGroup className="form-group">
            <FormCheck>
              <FormCheck.Input type="checkbox" className="form-check-input" />
              <FormCheck.Label className="form-check-label">
                I agree to the license terms.
              </FormCheck.Label>
            </FormCheck>
          </FormGroup>
          <FormGroup>
            <Button className="btn-primary" variant="primary" block type="submit">Sign Up</Button>
          </FormGroup>
          <a href="#" className="already">You already have an account? Login here.</a>
        </Form>
      </Container>
    </Container>
  );
};

export default LoginEN;
