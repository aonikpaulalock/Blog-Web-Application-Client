import React from 'react';
import useData from '../../Hooks/useData';
import "../../Styles/PostsStyles/AllPosts.css"
const AllPosts = () => {
  const [posts] = useData()
  return (
    <div className="container">
      <div className="col">
        {
          posts.map(post =>
            <div class="card mb-3" key={post.id}>
              <img class="card-img-top" src={post.img} alt="" />
              <div class="card-body">
                <h5 class="card-title-name">{post.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <h1 class="main-title">{post.mainTitle}</h1>
                  <h6>#</h6>
                </div>
                <div className="d-flex">
                  <h5>{post.date}</h5>
                  <h5>{post.location}</h5>
                  <h5>{post.company}</h5>
                </div>
                <h6 class="card-sub-title">{post.subTitle}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={post.userImg} alt="" />
                    <h5>{post.user}</h5>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6>{post.views}</h6>
                      <h6>#</h6>
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