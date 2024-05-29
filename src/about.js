import React from 'react';

const About = ({ visitCount }) => {
  return (
    <div>
    <h1>Welcome to the about page!</h1>
    <p>Home page visited: {visitCount} times</p>
    <p>Lab1 React Site with Routing Functionality</p>
    </div>
  );
};

export default About;
