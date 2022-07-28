import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import { Link } from "react-router-dom"
import "../../Styles/PostsStyles/PostHeader.css"
import useData from '../../Hooks/useData';

const PostHeader = () => {
  const [posts] = useData()
  return (
    <div className="container position-postheader">
      <div className="row">
        <div className="col-md-8">
          <ul className="navbar-nav d-flex flex-row">
            <li>
              <NavLink to="/post" as={Link}>All Posts
                <sup>({posts.length})</sup>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="currentColor" class="bi bi-people-fill me-1" viewBox="0 0 16 16">
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
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