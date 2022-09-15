import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import EditModal from './EditModal';
import edit from "../../Asset/Posts/edit.png"
const Edit = ({post,blogs,setBlogs}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h5 class="dropdown-item d-flex align-items-center fw-semibold text-muted" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(95, 95, 95)" class="bi bi-pencil-square me-3" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg>
        Edit</h5>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Let's learn, share & inspire each other with our passion for blogs please share your valuable blogs 🤘🏼</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-7">
              <EditModal post={post} setBlogs={setBlogs} blogs={blogs} />
            </div>
            <div className="col-md-5 d-flex justify-content-center align-items-center">
              <div className="">
                <img src={edit} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>


    </>
  );
};

export default Edit;