var React = require('react');
var NavHeader = require('NavHeader');

var imgUrl = require('../../public/images/hands-up.jpg');

var styles = {
  backgroundImage: 'url(' + imgUrl + ')',
  backgroundSize: 'cover',
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};

var Main = (props) => {
  return (
    <div style={styles}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <NavHeader/>
      <div className="row">
        <div className="columns small-10 medium-6 large-6 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
