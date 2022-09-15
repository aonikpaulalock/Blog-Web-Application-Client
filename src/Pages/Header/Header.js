import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Logo from "../../Asset/Logo/Logo.png"
import "../../Styles/Header.css"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
import userImg from "../../Asset/Posts/Login-User.png"
import SigninModal from './SigninModal';
const Header = () => {
  const [user] = useAuthState(auth)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="navbar navbar-expand-lg navber-bg sticky-top container-fluid">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" className="img-fluid" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
        <form className="mt-md-0 mt-5 mx-lg-auto form-width ps-sm-0 ps-3">
          <input className="form-control rounded-pill input-field" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
          <span className="search-position">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </form>
          {
            !user &&
            <ul className="navbar-nav mb-2 mb-lg-0 ps-sm-0 ps-4">
              <span className="dropdown account-text">
                Create Account .
                <span className="its-free" onClick={handleShow} > It's Free</span>
                <span className="dropdown-toggle"></span>
              </span>
            </ul>
          }
          {
            user && 
            <div  className='d-flex align-items-center'>
              <div className="d-flex justify-content-evenly align-items-center">
                {
                  user?.photoURL === null ?
                    <img src={userImg} alt="UserPhoto" className="mx-4" /> :
                    <img src={user?.photoURL} alt="UserPhoto" className="mx-4 rounded-circle border-warning" width={40} height={40} />
                }

                <button onClick={() => signOut(auth)} className="signout">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="#D9D9DB" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                  </svg>
                </button>
              </div>
            </div>
          }
          {/* SignUp-Modal */}
          <SigninModal
            show={show}
            handleClose={handleClose}
          ></SigninModal>

        </div>
      </div>
    </nav>
  );
};

export default Header;