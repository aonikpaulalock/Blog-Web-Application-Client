import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import useUserBlog from '../../Hooks/useUserBlog';
import Delete from './Delete';
import Edit from './Edit';
const UserAded = () => {
  const [user] = useAuthState(auth)
  const [blogs, setBlogs] = useUserBlog(user);
  return (
    <div className="container">
      <div className="col">
        {
          blogs?.map(post =>
            <div className="card mb-3" key={post._id}>
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
                      <Edit post={post} setBlogs={setBlogs} blogs={blogs}/>
                      <Delete post={post} setBlogs={setBlogs} blogs={blogs} />
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

export default UserAded;