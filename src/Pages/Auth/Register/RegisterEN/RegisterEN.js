import './RegisterEN.css' 
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, FormGroup, FormControl, FormCheck , FormLabel , FormSelect } from 'react-bootstrap';

const RegisterEN = () => {
  return (
    <Container className="register-photo">
    <Container className="form-container">
      <Container className="image-holder">
        {/* Add your image here */}
      </Container>
      <Form className="form" method="post">
        <h2 className="text-center"><strong>Create</strong> an account.</h2>
        <FormGroup className="form-group">
          <FormControl type="text" name="first-name" placeholder="First Name" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="text" name="last-name" placeholder="Last Name" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="date" name="birth-date" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormLabel>Country</FormLabel>
          <FormSelect name="country" className="form-control">
            <option value="Tunisia">Tunisia</option>
            <option value="Egypt">Egypt</option>
            <option value="America">United States</option>
          </FormSelect>
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="text" name="company-name" placeholder="Company Name" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="email" name="email" placeholder="Email Address" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="password" name="password" placeholder="Password" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormCheck>
        +
            <FormCheck.Label className="form-check-label">
              I agree to the license terms.
            </FormCheck.Label>
          </FormCheck>
        </FormGroup>
        <FormGroup>
          <Button className="btn-primary" variant="primary" block type="submit">Sign Up</Button>
        </FormGroup>
        <a href="#" className="already">Already have an account? Login here.</a>
      </Form>
    </Container>
  </Container>
  
  
  
  
  
  
  

  );
};

export default RegisterEN;