import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from "../../Asset/Notfound/notFound.png";
import "../../Styles/Notfound.css"
const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div className="container notFound-container">
      <div className="row">
        <div className="col-12">
          <img src={notFound} alt="" className="img-fluid" />
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="not-found-page">
            <div>
              <h1>Somethings Went Wrong <span className="error">404</span></h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit et nemo molestias. Commodi cupiditate consequatur omnis, quisquam ut sed!</p>
              <button className="notfound-button" onClick={() => navigate("/post")}>Back to Blogs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;