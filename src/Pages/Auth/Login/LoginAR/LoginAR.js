import './LoginAR.css' 
import React from 'react';
import { Container, Form, Button, FormGroup, FormControl, FormCheck } from 'react-bootstrap';

const LoginAR= () => {
  return (
    <Container className="register-photo">
      <Container className="form-container">
    <Container className="image-holder">
      {/* أضف صورتك هنا */}
    </Container>
    <Form className="form" method="post">
      <h2 className="text-center"><strong>إنشاء</strong> حساب جديد.</h2>
      <FormGroup className="form-group">
        <FormControl type="email" name="email" placeholder="البريد الإلكتروني" className="form-control" />
      </FormGroup>
      <FormGroup className="form-group">
        <FormControl type="password" name="password" placeholder="كلمة المرور" className="form-control" />
      </FormGroup>
      <FormGroup className="form-group">
        <FormCheck>
          <FormCheck.Input type="checkbox" className="form-check-input" />
          <FormCheck.Label className="form-check-label">
            أوافق على شروط الترخيص.
          </FormCheck.Label>
        </FormCheck>
      </FormGroup>
      <FormGroup>
        <Button className="btn-primary" variant="primary" block type="submit">التسجيل</Button>
      </FormGroup>
      <a href="#" className="already">هل لديك حساب بالفعل؟ قم بتسجيل الدخول هنا.</a>
    </Form>
  </Container>
  </Container>
  );
};

export default LoginAR;