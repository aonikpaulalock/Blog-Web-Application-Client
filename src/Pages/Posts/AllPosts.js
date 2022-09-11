import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import useData from '../../Hooks/useData';
import "../../Styles/PostsStyles/AllPosts.css"
const AllPosts = () => {
  const [posts] = useData()
  return (
    <div className="container">
      <div className="col">
        {
          posts?.map(post =>
            <div className="card mb-3" key={post.id}>
              <img className="card-img-top img-fluid" src={post.img} alt="" />
              <div className="card-body">
                <h5 className="card-title-name">{post.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="main-title">{post.mainTitle}</h1>
                </div>
                <h6 className="card-sub-title">{post.subTitle}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={post.userImg} alt="" />
                    <h5 className="userName">{post.user}</h5>
                  </div>
                  <div class="dropdown">
                    <button class="svg-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" className="bi bi-three-dots " viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </button>
                    <div class="dropdown-menu border-0 shadow " aria-labelledby="dropdownMenuButton">
                      {
                        post.email ?
                          <>
                            <h5 class="dropdown-item d-flex align-items-center fw-semibold text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(95, 95, 95)" class="bi bi-pencil-square me-3" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                              </svg>
                              Edit</h5>
                            <h5 class="dropdown-item d-flex align-items-center fw-semibold text-muted">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(255, 81, 81)" class="bi bi-archive-fill me-3" viewBox="0 0 16 16">
                                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                              </svg>
                              Delete</h5>
                          </>
                          :
                          <h5 className="p-3 lh-base text-danger fw-semibold">Can't Edit and Delete</h5>
                     }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default AllPosts;