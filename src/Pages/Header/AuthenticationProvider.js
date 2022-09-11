import React from 'react';
import Google from "../../Asset/Logo/google-logo-9808.png"
import Facebook from "../../Asset/Logo/Facebook-f_Logo-Blue-Logo.wine.svg"
import "../../Styles/PostsStyles/AuthenticationProvider.css"
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Shared/Loading';
const AuthenticationProvider = ({handleClose}) => {
  let errorStore;

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if (error) {
    errorStore = <p className="text-danger font-semibold text-center my-2 fs-5">Error: {error?.message}</p>
  }
  if (user) {
    handleClose(true)
  }
  if (loading) {
    return <Loading />;
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