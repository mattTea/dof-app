var React = require('react');

var GigSearch = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var gigs = this.refs.gigs; // there are no refs highlighted in the form below?

    this.props.onSearch(gigs); // if valid, call the parent 'onSearch' function
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <button className="button expanded hollow">Find gigs</button>
        </form>
      </div>
    );
  }
});

module.exports = GigSearch;
