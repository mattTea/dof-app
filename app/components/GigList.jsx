var React = require('react');

var GigList = React.createClass({
  render: function () {
    var gigs = this.props.gigs;
    var gigsJson = JSON.stringify(gigs);

    return (
      <p>{gigs}</p>
    );
  }
});

module.exports = GigList;
