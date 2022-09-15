import React, { useState } from 'react';
import notFound from "../../Asset/Notfound/notFound.png";
import SigninModal from '../Header/SigninModal';
const Notfound2 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container notFound-container">
      <div className="row">
        <div className="col-lg-6">
          <img src={notFound} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <div className="not-found-page">
            <div>
              <h1>Can't See Blogs <span className="error">Please Login</span></h1>
              <p>If you first time visit this application you can't see blogs. if can seeing our blogs please kindly register in our website then easily see all blogs !</p>
              <button className="notfound-button"onClick={handleShow}>Please Register</button>
            </div>
          </div>
        </div>
      </div>
      <SigninModal
        show={show}
        handleClose={handleClose}
      ></SigninModal>
    </div>
  );
};

export default Notfound2;