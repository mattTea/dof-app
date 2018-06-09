import React from 'react';

const dofUrl = 'https://sites.google.com/johnlewis.co.uk/deliveringourfuture/'

const About = () => (
  <div className="container">
    <h3>About</h3>
    <a href={dofUrl} target="_blank">
      <h5>Find out about Delivering our Future here</h5>
    </a>
  </div>
);

export default About;