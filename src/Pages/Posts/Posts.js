import React from 'react';
import { Outlet } from "react-router-dom"
const Posts = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Outlet />
        </div>
        <div className="col-md-4">

        </div>
      </div>
    </div>
  );
};

export default Posts;