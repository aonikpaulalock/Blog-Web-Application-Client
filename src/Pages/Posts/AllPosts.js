import React from 'react';
import useData from '../../Hooks/useData';
const AllPosts = () => {
  const [posts] = useData()
  return (
    <div className="container">
      <h1>All Posts {posts.length}</h1>
    </div>
  );
};

export default AllPosts;