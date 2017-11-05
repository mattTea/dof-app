var React = require('react');

var GigList = React.createClass({
  render: function () {
    var gigs = this.props.gigs;

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

    if (gigs._embedded === undefined) {
      return <h5 className="text-center no-gigs">Sad times, there are no tiny gigs tonight.</h5>;
    } else {
      console.log('gigs._embedded.events.length: ' + gigs._embedded.events.length);
      // console.log('gigs._embedded.events: ' + JSON.stringify(gigs._embedded.events));

      for (var i = 0; i < gigs._embedded.events.length; i++) {
        // if ((gigs._embedded.events[i].dates.start.localDate === todayFormat) && (gigs._embedded.events[i].dates.status.code !== 'cancelled')) {
        // if ((gigs._embedded.events[i].dates.start.localDate <= todayFormat) && (gigs._embedded.events[i].sales.public.endDateTime >= todayFormat) && (gigs._embedded.events[i].dates.status.code !== 'cancelled')) {
        var startDate = Date.parse(gigs._embedded.events[i].dates.start.localDate);
        var gigDate = Date.parse(todayFormat);
        var endDate = Date.parse(gigs._embedded.events[i].sales.public.endDateTime)
        if ((startDate <= gigDate) && (endDate >= (gigDate - 16000000)) && (gigs._embedded.events[i].dates.status.code !== 'cancelled')) {
          tinyGigs.push(gigs._embedded.events[i])
        }
      }

      console.log('tinyGigs.length: ' + tinyGigs.length);
      // console.log('tinyGigs: ' + JSON.stringify(tinyGigs));

      var listOfGigs = [];

      if (tinyGigs.length > 0) {
        for (var i = 0; i < tinyGigs.length; i++) {
          listOfGigs.push({
            name: tinyGigs[i].name,
            venue: tinyGigs[i]._embedded.venues[0].name
          });
        }
        console.log('listOfGigs.length: ' + listOfGigs.length);
        // console.log('listOfGigs: ' + JSON.stringify(listOfGigs));
      } else {
        return <h5 className="text-center no-gigs">Sad times, there are no tiny gigs tonight.</h5>;
      }

      // filter duplicates from listOfGigs
      var seen = {};
      var noDupeListOfGigs = [];

      for (var j = 0; j < listOfGigs.length; j++) {
        var name = listOfGigs[j].name.substring(0,8);
        var lowerName = name.toLowerCase();

        if (!(lowerName in seen)) {
          noDupeListOfGigs.push(listOfGigs[j]);
          seen[lowerName] = true;
        }
      }
      console.log('noDupeListOfGigs.length: ' + noDupeListOfGigs.length);
      console.log('noDupeListOfGigs: ' + JSON.stringify(noDupeListOfGigs));

      var venueHref = require('./venueUrl.jsx').venueHref;

      const listItems = noDupeListOfGigs.map((noDupeListOfGigs, index) =>
        <li key={index}>
          {venueHref.map(function(venueHref, i) {
            if (venueHref.venueName === noDupeListOfGigs.venue) {
              return <a href={venueHref.venueUrl} key={i} target="_blank">
                {noDupeListOfGigs.name} at {noDupeListOfGigs.venue}
              </a>
            }
          })}
        </li>
      );

      return (
        <div className="text-left">
          <h4 id="list-header">Today's tiny gigs...</h4>
          <div id="list-body">
            <ul>{listItems}</ul>
          </div>
        </div>
      );
    }
  }
});

module.exports = GigList;
