import React from 'react';

const dofUrl = 'https://sites.google.com/johnlewis.co.uk/deliveringourfuture/';
const bookUrl = 'https://drive.google.com/drive/folders/1vZV9BzaCvgsqc4LpMXtpffef70wK3i-a?usp=sharing';
const requestNewCourseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdG3HP6dVllK4oaks5AYsszgw1UIZwtnbY0ohAlqCinYy7iRw/viewform';

const Booking = () => (
  <div className="container top-padding">
    <h3>Booking</h3>
    <p style={{textAlign: "center"}}>To book a place on any of the facilitated sessions, <a href={bookUrl} target="_blank"><b>click here</b></a></p>
    <br/>
    <p style={{textAlign: "center"}}>To request an alternative training resource, <a href={requestNewCourseUrl} target="_blank"><b>click here</b></a></p>
  </div>
);

export default Booking;