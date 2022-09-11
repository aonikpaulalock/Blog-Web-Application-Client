import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Login from "../../Asset/Login/login.png"
import ModalForm from './ModalForm';
import ModalForm2 from './ModalForm2';
const SigninModal = ({show,handleClose}) => {
  const [toggle, setToggle] = useState(true)
  return (
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
              toggle ? <ModalForm handleClose={handleClose} /> : <ModalForm2 handleClose={handleClose} />
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
  );
};

export default SigninModal;