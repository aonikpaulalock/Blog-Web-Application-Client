import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Logo from "../../Asset/Logo/Logo.png"
import "../../Styles/Header.css"
import Modal from 'react-bootstrap/Modal';
import Login from "../../Asset/Login/login.png"
import ModalForm from './ModalForm';
import ModalForm2 from './ModalForm2';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth)
  const [toggle, setToggle] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav class="navbar navbar-expand-lg navber-bg sticky-top">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src={Logo} alt="" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"> <form class="mt-md-0 mt-5 mx-lg-auto form-width ">
          <input class="form-control rounded-pill input-field" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
        </form>
          {
            !user ?
              <ul class="navbar-nav mb-2 mb-lg-0" onClick={handleShow}>
                <span class="dropdown account-text">
                  Create Account .
                  <span className="its-free"> It's Free</span>
                  <span className="dropdown-toggle"></span>
                </span>
              </ul>
              :
              <button onClick={() => signOut(auth)}>Logout</button>
          }

          {/* SignUp-Modal */}

          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-md-6">
                  {
                    toggle ? <ModalForm /> : <ModalForm2 />
                  }
                </div>
                <div className="col-md-6">
                  <div className="image-content">
                    <h5 className="acount-heading">Already have an account ?
                      <span onClick={() => setToggle(false)}> Sign In</span>
                    </h5>
                    <img src={Login} alt="" className="img-fluid" />
                    {
                      toggle ? <p className="Privacy-policy">By signing up, you agree to our Terms & conditions, Privacy policy</p> : ""
                    }
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Header;