var React = require('react');

var GigSearch = React.createClass({
  propTypes: {
    gigType: React.PropTypes.string.isRequired
  },
  onFormSubmit: function (e) {
    e.preventDefault();

    var gigs = this.refs.gigs; // there are no refs highlighted in the form below?

    this.props.onSearch(gigs); // if valid, call the parent 'onSearch' function
  },

  render: function () {
    var {gigType} = this.props;
    // console.log('gigType: ' + gigType);
    var renderFindGigsButton = () => {
      if (gigType === 'theatre') {
        return <button className="button expanded hollow">Find tiny plays</button>
      } else {
        return <button className="button expanded hollow">Find tiny gigs</button>
      }
    };

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          {renderFindGigsButton()}
        </form>
      </div>
    );
  }
});

module.exports = GigSearch;
