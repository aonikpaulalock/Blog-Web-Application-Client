import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../Firebase.init';
import SigninModal from '../Header/SigninModal';
import Loading from './Loading';

const RequireAuth = ({children}) => {
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loading/>
    }

    if(!user){
        // return  <SigninModal  setShow(true)/>
    }
    return children;
};

export default RequireAuth;