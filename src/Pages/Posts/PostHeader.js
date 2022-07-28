import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom"
import "../../Styles/PostsStyles/PostHeader.css"
import useData from '../../Hooks/useData';
const PostHeader = () => {
  const [posts] = useData()
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <ul className="navbar-nav d-flex flex-row">
            <li>
              <NavLink to="/post" as={Link}>All Posts
                <sub>{posts.length}</sub>
              </NavLink>
            </li>
            <li>
              <NavLink to="/post/article" as={Link} >Article</NavLink>
            </li>
            <li>
              <NavLink to="/post/events" as={Link}>Events</NavLink>
            </li>
            <li>
              <NavLink to="/post/education" as={Link}>Education</NavLink>
            </li>
            <li>
              <NavLink to="/post/jobs" as={Link}>Jobs</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <div>
            <button className="post-button me-4">
              Write a Post
            </button>
            <button className="group-button">
              Join Group
            </button>
          </div>
        </div>
        <hr className="horizantal-line" />
      </div>
    </div>
  );
};

export default PostHeader;