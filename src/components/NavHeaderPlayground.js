var React = require('react');

var {Link, IndexLink} = require('react-router');

// var NavHeader = () => {

var NavHeader = React.createClass({
  getInitialState: function () {
    return {
      listVisible: false
    }
  },
  show: function () {
    this.setState({listVisible: true});
    document.addEventListener("click", this.hide);
  },
  hide: function() {
    this.setState({listVisible: false});
    document.removeEventListener("click", this.hide);
  },


  render: function() {
    return (
      <div className="top-bar vertical-align">
        <ul className="dropdown menu" data-dropdown-menu>
          <li><img src={require('../../public/images/CaravanGig2.png')} style={{maxWidth: "3.5em", maxHeight: "3.5em"}}></img></li>
          <li>
            <a href="#" className="menu-text" style={{fontSize: 12}} onClick={this.show}>Gigs in Tiny Venues></a>
            <ul className="menu">
              <li><IndexLink to="/" activeClassName="active-link" style={{fontSize: 12}}>Music</IndexLink></li>
              <li><Link to="/plays" activeClassName="active-link" style={{fontSize: 12}}>Theatre</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
// };
});

module.exports = NavHeader;
