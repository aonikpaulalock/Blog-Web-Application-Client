import React from 'react';
import { Link } from "react-router-dom"
import Logo from "../../Asset/Logo/Logo.png"
import "../../Styles/Header.css"
const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navber-bg">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img src={Logo} alt="" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"> <form class="mt-md-0 mt-5 mx-lg-auto form-width ">
          <input class="form-control rounded-pill" type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search" />
        </form>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <span class="dropdown account-text">
              Create Account . 
              <Link to="/"> It's Free</Link>
              <span  className="dropdown-toggle ms-2"></span>
            </span>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;