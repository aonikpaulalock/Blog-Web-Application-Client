import React from 'react';
import Google from "../../Asset/Logo/google-logo-9808.png"
import Facebook from "../../Asset/Logo/Facebook-f_Logo-Blue-Logo.wine.svg"
import "../../Styles/PostsStyles/AuthenticationProvider.css"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
const AuthenticationProvider = () => {
  let location = useLocation();
  const navigate = useNavigate()
  // const from = location?.state?.from?.pathname || '/'
  let errorStore;

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    errorStore = <p className="text-danger">Error: {error?.message}</p>
  }
  if (user) {
    // navigate(from, { replace: true });
    console.log(user)
  }
  if (loading) {
    return;
  }
  return (
    <div>
      <button className="Google-Provider" onClick={() => signInWithGoogle()}>
        <div className='d-flex align-items-center justify-content-center'>
          <img src={Google} alt="" width={25} height={25} />
          <span className="ms-4">Sign up with Google</span>
        </div>
      </button>
      <button className="Google-Provider mt-3">
        <div className='d-flex align-items-center justify-content-center'>
          <img src={Facebook} alt="" width={25} height={25} />
          <span className="ms-4">Sign up with Facebook</span>
        </div>
      </button>
      {errorStore}
    </div>
  );
};

export default AuthenticationProvider;