var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavHeader = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Gigs in Tiny Venues</IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
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
