import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import AuthenticationProvider from './AuthenticationProvider';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { reload } from 'firebase/auth';
import Loading from '../Shared/Loading';
const ModalForm = ({handleClose}) => {
  const [error, setError] = useState('')
  const [updateProfile,updating] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user,loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

  const handleSubmit = async event => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value
    const confirmPassword = event.target.confirmPassword.value
    console.log(email, password);

    if (password !== confirmPassword) {
      setError("Don't match password")
      return;
    }

    if (password.length < 8) {
      setError(" Minimum type eight charchter ")
      return;
    }

    createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name })
    event.target.reset()
    reload()
  }
    if (loading || updating) {
      return <Loading />
    }
  if (user) {
    handleClose(true)
    // console.log(user)
  }
  return (
    <Form className="form-container" onSubmit={handleSubmit}>
      <h2 className="heding-signup">Create Account</h2>
      <Form.Group className="input-name">
        <Form.Control type="text" name="name" placeholder="Your Name"
          className="input"
          required
          autoComplete='off'
        />
      </Form.Group>
      <Form.Group className="input-name">
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter Email"
          className="input"
          required
          autoComplete='off'
        />
      </Form.Group>
      <Form.Group className="input-name">
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          className="input"
          required />
      </Form.Group>
      <Form.Group className="input-name">
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="input"
          required />
      </Form.Group>
      <h6 className='text-center text-danger mt-3 mb-0 fs-5'>{error}</h6>
      <button type="submit" className="Signup-Button">Sign up</button>
      <AuthenticationProvider handleClose={handleClose} />
    </Form>
  );
};

export default ModalForm;