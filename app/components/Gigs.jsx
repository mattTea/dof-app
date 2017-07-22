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

        var tinyGigs = [];

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd < 10) {
            dd = '0' + dd
        }
        if(mm < 10) {
            mm = '0' + mm
        }
        var todayFormat = yyyy + '-' + mm + '-' + dd;

        console.log('gigs._embedded.events.length: ' + gigs._embedded.events.length);

        for (var i = 0; i < gigs._embedded.events.length; i++) {
          if (gigs._embedded.events[i].dates.start.localDate === todayFormat) {
            tinyGigs.push(gigs._embedded.events[i])
          }
        }

        console.log('tinyGigs.length: ' + tinyGigs.length);
        console.log(tinyGigs);

        // TODOs
        // build a table of tinyGigs data so we can return that below
        // handle when there are 0 gigs in tinyGigs

        return (
          <div>
            <GigList gigs={tinyGigs[0].name + ' at ' + tinyGigs[0]._embedded.venues[0].name}/>
          </div>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Gigs</h1>
        <GigSearch onSearch={this.handleSearch}/>
        {renderGigList()}
      </div>
    );
  }

});

module.exports = Gigs;
