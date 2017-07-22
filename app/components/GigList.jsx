var React = require('react');

var GigList = React.createClass({
  render: function () {
    var gigs = this.props.gigs;

    return (
      <div className="text-center">
        <h4>Today's tiny gigs...</h4>
        {gigs}
      </div>
    );
  }
});

module.exports = GigList;
