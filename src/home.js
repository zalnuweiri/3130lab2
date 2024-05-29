import React, { useState, useEffect } from 'react';

const Home = ({setVisitCount}) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const viewCount = localStorage.getItem('pageViews');
    if (viewCount) {
      setViews(parseInt(viewCount, 10));
    }

    setViews((prevViews) => {
      const newViews = prevViews + 1;
      localStorage.setItem('pageViews', newViews.toString());
      setVisitCount(newViews);
      return newViews;
    });

  }, [setVisitCount]);

  return (
    <div>
      <h1>Home</h1>
      <h2>Page View Counter</h2>
      <p>This page has been viewed {views} times!</p>
      <br></br>
      <p>Banner ID: <strong><em>B00934739</em></strong></p>
    </div>
  );
};

export default Home;
