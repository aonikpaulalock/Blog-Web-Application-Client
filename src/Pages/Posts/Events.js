import React from 'react';
import useData from '../../Hooks/useData';

const Events = () => {
  const [posts] = useData()
  console.log(posts);
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};

export default Events;