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

    console.log('gigs._embedded.events.length: ' + gigs._embedded.events.length);

    for (var i = 0; i < gigs._embedded.events.length; i++) {
      if ((gigs._embedded.events[i].dates.start.localDate === todayFormat) && (gigs._embedded.events[i].dates.status.code !== 'cancelled')) {
        tinyGigs.push(gigs._embedded.events[i])
      }
    }

    console.log('tinyGigs.length: ' + tinyGigs.length);
    // console.log(JSON.stringify('tinyGigs: ' + tinyGigs));

    var listOfGigs = [];

    if (tinyGigs.length > 0) {
      for (var i = 0; i < tinyGigs.length; i++) {
        listOfGigs.push({
          name: tinyGigs[i].name,
          venue: tinyGigs[i]._embedded.venues[0].name
        });
      }
      console.log('listOfGigs.length: ' + listOfGigs.length);
      // console.log(JSON.stringify('listOfGigs: ' + listOfGigs));
    } else {
      return <h5 className="text-center">Sad times, there are no tiny gigs tonight.</h5>;
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

    var venueHref = [
      {venueName: 'Garage', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Union Chapel', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Birthdays', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Dublin Castle', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Lexington', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Good Ship', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Shacklewell Arms', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Windmill', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Nambucca', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Notting Hill Arts Centre', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Moth Club', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Old Blue Last', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Hoxton Square Bar & Kitchen', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Underworld Camden', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Proud Camden', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Camden Assembly (Barfly)', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'KOKO', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Dingwalls', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Dirty South', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Amersham Arms', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Bull & Gate', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Borderline', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Scala', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: "Old Queens Head", venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'XOYO', venueUrl: 'http://xoyo.co.uk/whats-on'},
      {venueName: '100 Club', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Hope & Anchor', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Cargo', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Servant Jazz Quarters', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'St Moritz', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Lock Tavern', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Black Heart', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Purple Turtle', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Victoria', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Cafe Oto', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'The Islington', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Macbeth', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Waiting Room', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Green Note', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Lewis Cubitt Square', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'The Finsbury', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'The Sound Lounge', venueUrl: 'http://www.thesoundlounge.org.uk/'},
      {venueName: 'Slaughtered Lamb', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Surya', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Troubadour', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'The Half Moon', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Water Rats', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'The Pickle Factory', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Corsica Studios', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Jazz Cafe', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Kamio', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'ECHOES', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Omeara', venueUrl: 'http://www.ticketmaster.co.uk/'}
    ];

    const listItems = noDupeListOfGigs.map((noDupeListOfGig, index) =>
      <li key={index}>
        {venueHref.map(function(venueHref, i) {
          if (venueHref.venueName === noDupeListOfGig.venue) {
            return <a href={venueHref.venueUrl} key={i} target="_blank">
              {noDupeListOfGig.name} at {noDupeListOfGig.venue}
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
});

module.exports = GigList;
