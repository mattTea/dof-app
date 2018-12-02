import React from 'react';

const dofUrl = 'https://sites.google.com/johnlewis.co.uk/deliveringourfuture/'

const Contact = () => (
  <div className="container top-padding">
    <h3>Delivering our Future</h3>
    <div className="contact">
      <a href={dofUrl} target="_blank">
        <p style={{textAlign: "center"}}>Click here to find out more.</p>
      </a>
      <p>And visit Slack for all DoF and training related queries...</p>
      <a href={'https://johnlewis.slack.com/messages/CALN0LRFV'} target="_blank">
        <div className="slack">
          <img src={require('../../public/images/slack.png')} style={{maxWidth: "1.5em", maxHeight: "1.5em", padding: "0 .5em"}}></img>
          <div>#comm-dof-all-waves</div>
        </div>
      </a>
    </div>
  </div>
);

export default Contact;