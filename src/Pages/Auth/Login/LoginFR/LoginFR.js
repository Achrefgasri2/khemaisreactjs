import './LoginFR.css' 
import React from 'react';
import { Container, Form, Button, FormGroup, FormControl, FormCheck } from 'react-bootstrap';

const LoginFR = () => {
  return (
    <Container className="register-photo">
   <Container className="form-container">
    <Container className="image-holder">
      {/* Ajoutez votre image ici */}
    </Container>
    <Form className="form" method="post">
      <h2 className="text-center"><strong>Créer</strong> un compte.</h2>
      <FormGroup className="form-group">
        <FormControl type="email" name="email" placeholder="Adresse e-mail" className="form-control" />
      </FormGroup>
      <FormGroup className="form-group">
        <FormControl type="password" name="password" placeholder="Mot de passe" className="form-control" />
      </FormGroup>
      <FormGroup className="form-group">
        <FormCheck>
          <FormCheck.Input type="checkbox" className="form-check-input" />
          <FormCheck.Label className="form-check-label">
            J'accepte les termes de la licence.
          </FormCheck.Label>
        </FormCheck>
      </FormGroup>
      <FormGroup>
        <Button className="btn-primary" variant="primary" block type="submit">S'inscrire</Button>
      </FormGroup>
      <a href="#" className="already">Vous avez déjà un compte ? Connectez-vous ici.</a>
    </Form>
  </Container>
</Container>

  );
};

export default LoginFR;