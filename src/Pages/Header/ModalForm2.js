import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import AuthenticationProvider from './AuthenticationProvider';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { toast } from 'react-toastify';
// import { sendPasswordResetEmail } from "firebase/auth";
const ModalForm2 = ({ handleClose }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setloginError] = useState('')
  const [
    signInWithEmailAndPassword,
    user,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password)

    if (password.length < 8) {
      setloginError('Minimum type eight charchter')
      return;
    }
    event.target.reset()
    auth.currentUser.reload()
  }


  if (user) {
    handleClose(true)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const handlePasswordReset = async (e) => {
    await sendPasswordResetEmail(email);
    toast.message("Message Send")
  }
  return (
    <Form className="form-container" onSubmit={handleLoginSubmit}>
      <h2 className="heding-signup">Signin Account</h2>
      <Form.Group className="input-name">
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter Email"
          className="input"
          onChange={handleEmail}
          required
          autoComplete='off'
        />
      </Form.Group>
      <Form.Group className="input-name">
        <Form.Control
          type="password"
          name="password"
          onChange={handlePassword}
          placeholder="Password"
          className="input"
          required />
      </Form.Group>
      <h6 className='text-center text-danger mt-3 mb-0 fs-5'>{loginError}</h6>
      <button type="submit" className="Signup-Button">Sign In</button>
      <AuthenticationProvider />
      <h5 className="forget-password" onClick={handlePasswordReset}>Forgot Password?</h5>
      <h5 className="text-center text-danger mt-3 mb-0 fs-5">{error?.message}</h5>
    </Form>
  );
};

export default ModalForm2;