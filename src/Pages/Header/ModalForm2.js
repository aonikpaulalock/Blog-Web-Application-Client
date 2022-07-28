import React from 'react';
import { Form } from 'react-bootstrap';
import AuthenticationProvider from './AuthenticationProvider';
const ModalForm2 = () => {
  return (
    <Form className="form-container">
      <h2 className="heding-signup">Create Account</h2>
      <Form.Group className="input-name">
        <Form.Control type="email" name="email" placeholder="Enter Email"
          className="input"
          required
          autoComplete='off'
        />
      </Form.Group>
      <Form.Group className="input-name">
        <Form.Control type="password" name="password" placeholder="Password" className="input" required />
      </Form.Group>
      <button type="submit" className="Signup-Button">Sign In</button>
      <AuthenticationProvider />
      <h6 className="forget-password">Forgot Password?</h6>
    </Form>
  );
};

export default ModalForm2;