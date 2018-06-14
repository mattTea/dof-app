import React from 'react';

const dofUrl = 'https://sites.google.com/johnlewis.co.uk/deliveringourfuture/'

const Home = () => (
  <div className="container top-padding">
    <h3>Delivering our Future</h3>
    <h4>Empowering Partners with choice and flexibility</h4>
    <a href={dofUrl} target="_blank">
      <p style={{textAlign: "center"}}>discover more...</p>
    </a>
  </div>
);

export default Home;