import React from 'react';
import useData from '../../Hooks/useData';

const Article = () => {
  const [posts] = useData()
  console.log(posts);
  return (
    <div>
      {/* { 
        posts
        .filter(post => post.name === "✍️ Article").map(post => <li key={post.id}>{post.name}</li>) 
      } */}
    </div>
  );
};

export default Article;