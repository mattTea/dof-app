var React = require('react');
var $ = require('jQuery');

var {Link, IndexLink} = require('react-router');

var NavHeader = (props) => {

  return (
    <div className="top-bar vertical-align">
      <ul className="dropdown menu" data-dropdown-menu>
        <li><img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "3.5em", maxHeight: "3.5em"}}></img></li>
        <li>
          <a href="#" className="menu-text" style={{fontSize: 12}}>Gigs in Tiny Venues></a>
          <ul className="menu">
            <li><IndexLink to="/" activeClassName="active-link" style={{fontSize: 12}}>Music</IndexLink></li>
            <li><Link to="/plays" activeClassName="active-link" style={{fontSize: 12}}>Theatre</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

module.exports = NavHeader;
