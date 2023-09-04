import './RegisterFR.css' 
import React from 'react';
import { Container, Form, Button, FormGroup, FormControl, FormCheck , FormLabel , FormSelect } from 'react-bootstrap';

const RegisterFR = () => {
  return (
    <Container className="register-photo">
    <Container className="form-container">
      <Container className="image-holder">
        {/* Ajoutez votre image ici */}
      </Container>
      <Form className="form" method="post">
        <h2 className="text-center"><strong>Créer</strong> un compte.</h2>
        <FormGroup className="form-group">
          <FormControl type="text" name="nom" placeholder="Nom" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="text" name="prenom" placeholder="Prénom" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="date" name="dateNaissance" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
        
          <FormSelect name="pays" className="form-control">
            <option value="Tunisia">Tunisie</option>
            <option value="Egypt">Égypte</option>
            <option value="America">États-Unis</option>
          </FormSelect>
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="text" name="nomSociete" placeholder="Nom de la société" className="form-control" />
        </FormGroup>
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

export default RegisterFR;