import React, { useState } from 'react';
import { Modal, NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom"
import "../../Styles/PostsStyles/PostHeader.css"
import useData from '../../Hooks/useData';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import add from "../../Asset/Posts/addBlogs.png"
import AddBlogs from './AddBlogs';
import useUserBlog from '../../Hooks/useUserBlog';
const PostHeader = () => {
  const [user] = useAuthState(auth)
  const [Blogs]  = useUserBlog(user)
  const [posts] = useData()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container position-postheader">
      <div className="row gap-lg-0 gap-3">
        <div className="col-lg-8 col-12">
          {
            user &&
            <ul className="navbar-nav d-flex flex-row">
              <li>
                <NavLink to="/post" as={Link}>
                </NavLink>
              </li>
              <li>
                <NavLink to="/all" as={Link}>All
                  <sup>({posts.length})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="/post/article" as={Link} >Article
                  <sup>({posts.filter(post => post.name?.includes("✍️ Article")).length})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="/post/events" as={Link}>Events
                  <sup>({posts.filter(post => post.name?.includes("🗓️ Meetup")).length})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="/post/education" as={Link}>Education
                  <sup>({posts.filter(post => post.name?.includes("🔬️ Education")).length})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="/post/jobs" as={Link}>Jobs
                  <sup>({posts.filter(post => post.name?.includes("💼️ Job")).length})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="/post/add" as={Link}>Your Blogs
                  <sup>({Blogs.length})</sup>
                </NavLink>
              </li>
            </ul>
          }
          {
            !user &&
            <ul className="navbar-nav d-flex flex-row">
              <li>
                <NavLink to="#" as={Link}>All Posts
                  <sup>({0})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" as={Link} >Article
                  <sup>({0})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" as={Link}>Events
                  <sup>({0})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" as={Link}>Education
                  <sup>({0})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" as={Link}>Jobs
                  <sup>({0})</sup>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" as={Link}>Your Blogs
                  <sup>({0})</sup>
                </NavLink>
              </li>
            </ul>
          }
        </div>
        <div className="col-lg-4 d-lg-flex justify-content-lg-end col-12">
          <div>
            <button className="post-button me-4" onClick={user && handleShow}>
              Write a Post
            </button>
            {/* {
              !user ? <button className="group-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-people-fill me-1" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
                Join Group
              </button>
                :
                <button className="leave-group-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" className="bi bi-box-arrow-in-right me-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                    <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                  </svg>
                  Leave Group
                </button>
            } */}
          </div>
        </div>
        <hr className="horizantal-line" />
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
                <AddBlogs handleClose={handleClose} />
              </div>
              <div className="col-md-5 d-flex justify-content-center align-items-center">
                <div className="">
                  <img src={add} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

      </div>
    </div>
  );
};

export default PostHeader;