import React from 'react';
// import NavHeader from './NavHeader';

// var imgUrl = require('../../public/images/hands-up.jpg');

const styles = {
  // backgroundImage: 'url(' + imgUrl + ')',
  backgroundImage: '../../public/images/hands-up.jpg',
  backgroundSize: 'cover',
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed'
};

const Main = (props) => {
  return (
    <div style={styles}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      {/* <NavHeader/> */}
      <div className="row">
        <div className="columns small-10 medium-6 large-6 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Main;
