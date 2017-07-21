var React = require('react');
var NavHeader = require('NavHeader');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <NavHeader/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
