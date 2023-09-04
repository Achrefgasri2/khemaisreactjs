import './RegisterAR.css' 
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, FormGroup, FormControl, FormCheck , FormLabel , FormSelect } from 'react-bootstrap';

const RegisterAR = () => {
  return (
    <Container className="register-photo">
    <Container className="form-container">
      <Container className="image-holder">
        {/* أضف الصورة هنا */}
      </Container>
      <Form className="form" method="post">
        <h2 className="text-center"><strong>إنشاء</strong> حساب جديد.</h2>
        <FormGroup className="form-group">
          <FormControl type="text" name="first-name" placeholder="الاسم الأول" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="text" name="last-name" placeholder="اسم العائلة" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="date" name="birth-date" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormSelect name="country" className="form-control">
            <option value="Tunisia">تونس</option>
            <option value="Egypt">مصر</option>
            <option value="America">الولايات المتحدة</option>
          </FormSelect>
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="text" name="company-name" placeholder="اسم الشركة" className="form-control" />
        </FormGroup>
        <FormGroup className="form-group">
          <FormControl type="email" name="email" placeholder="عنوان البريد الإلكتروني" className="form-control" />
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

export default RegisterAR;