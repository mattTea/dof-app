var React = require('react');
var GigList = require('GigList');
var GigSearch = require('GigSearch');
var ticketmasterPlays = require('ticketmasterPlays');

var Plays = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      gigType: 'theatre'
    }
  },
  handleSearch: function (gigs) {
    var that = this; // this gives us a way to access the 'this' keyword even after we create the new function below (otherwise the 'this' keyword would get lost [scope, etc])

    this.setState({isLoading: true});

    ticketmasterPlays.getGigs().then(function (gigs) {
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
    var {isLoading, gigType, gigs} = this.state;
    console.log('Gigs.jsx, this.state.gigs: ' + this.state.gigs);

    function renderGigList () {
      if (isLoading) {
        return <h5 className="text-center page-loading">Getting plays...</h5>;
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
        <h6 className="text-center page-blurb">For those who prefer their players close and their theatre fringe.</h6>
        <GigSearch onSearch={this.handleSearch} gigType={gigType}/>
        {renderGigList()}
      </div>
    );
  }
});

module.exports = Plays;
