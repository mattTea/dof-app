import React from 'react';

const Contact = () => (
  <div className="container">
    <h3>Contact</h3>
    <h5>Got a question?</h5>
    <div className="contact">
      Visit Slack for all DoF and training related queries... 
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