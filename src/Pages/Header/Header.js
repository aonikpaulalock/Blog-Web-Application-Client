import React, { useState } from 'react';
import { Link } from "react-router-dom"
import Logo from "../../Asset/Logo/Logo.png"
import "../../Styles/Header.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Header = () => {
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
          <ul class="navbar-nav mb-2 mb-lg-0" onClick={handleShow}>
            <span class="dropdown account-text">
              Create Account .
              <Link to="/"> It's Free</Link>
              <span className="dropdown-toggle"></span>
            </span>
          </ul>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </nav>
  );
};

export default Header;