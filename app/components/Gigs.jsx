var React = require('react');
var GigList = require('GigList');
var GigSearch = require('GigSearch');
var ticketmaster = require('ticketmaster');

var Gigs = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    }
  },
  handleSearch: function (gigs) {
    var that = this; // this gives us a way to access the 'this' keyword even after we create the new function below (otherwise the 'this' keyword would get lost [scope, etc])

    this.setState({isLoading: true});

    ticketmaster.getGigs().then(function (gigs) {
      that.setState({ // calling 'that' to use the 'this' keyword
        gigs: gigs,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false}),
      alert(errorMessage);
    });
  },
  render: function () {
    var isLoading = this.state.isLoading;
    var gigs = this.state.gigs;
    console.log('Gigs.jsx, this.state.gigs: ' + this.state.gigs);

    function renderGigList () {
      if (isLoading) {
        return <h3 className="text-center">Getting gigs...</h3>;
      } else if (gigs) {
        return (
          <div>
            <GigList gigs={gigs}/>
          </div>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Feeling intimate?</h1>
        <h5 className="text-center">For those who prefer their bands close<br/>and their drinks in a glass.</h5>
        <GigSearch onSearch={this.handleSearch}/>
        {renderGigList()}
      </div>
    );
  }

});

module.exports = Gigs;
