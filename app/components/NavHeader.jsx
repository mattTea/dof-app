var React = require('react');
var {Link, IndexLink} = require('react-router');

// todo - make decent icon image and add to commented out url below. also make it fixed size (not responsive)

var NavHeader = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-center show-for-small-only">
        <ul className="menu">
          <li><img src={require('../../public/images/gtvLogo.png')} style={{maxWidth: "35px", maxHeight: "35px"}}></img></li>
          <li className="menu-text" style={{fontSize: 11}}>Gigs in Tiny Venues</li>
        </ul>
      </div>
      <div className="top-bar-left show-for-medium">
        <ul className="menu">
          <li className="menu-text">Gigs in Tiny Venues</li>
        </ul>
      </div>
      <div className="top-bar-right show-for-medium">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/mattTea" target="_blank">mattTea</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = NavHeader;
