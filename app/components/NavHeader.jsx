var React = require('react');
// var {Link, IndexLink} = require('react-router');

var NavHeader = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Gigs in Tiny Venues</li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://matttea-blog.herokuapp.com" target="_blank">mattTea</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

module.exports = NavHeader;
