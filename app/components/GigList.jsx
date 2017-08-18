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
      {venueName: 'Garage', venueUrl: 'http://thegarage.london/listings/'},
      {venueName: 'Union Chapel', venueUrl: 'https://store.unionchapel.org.uk/'},
      {venueName: 'Birthdays', venueUrl: 'http://www.birthdaysdalston.com/'},
      {venueName: 'Dublin Castle', venueUrl: 'http://thedublincastle.com/'},
      {venueName: 'Lexington', venueUrl: 'http://thelexington.co.uk/calendar/'},
      {venueName: 'Good Ship', venueUrl: 'https://www.thegoodship.co.uk/'},
      {venueName: 'Shacklewell Arms', venueUrl: 'https://www.shacklewellarms.com/listings'},
      {venueName: 'Windmill', venueUrl: 'https://www.windmillbrixton.co.uk/'},
      {venueName: 'Nambucca', venueUrl: 'http://www.nambucca.co.uk/events/'},
      {venueName: 'Notting Hill Arts Centre', venueUrl: 'https://www.nottinghillartsclub.com/events'},
      {venueName: 'Moth Club', venueUrl: 'http://www.mothclub.co.uk/events'},
      {venueName: 'Old Blue Last', venueUrl: 'http://www.theoldbluelast.com/listings/'},
      {venueName: 'Hoxton Square Bar & Kitchen', venueUrl: 'http://www.hoxtonsquarebar.com/whats-on-live/'},
      {venueName: 'Underworld Camden', venueUrl: 'https://www.theunderworldcamden.co.uk/gigs'},
      {venueName: 'Proud Camden', venueUrl: 'http://proudcamden.com/listings-tickets/'},
      {venueName: 'The Camden Assembly', venueUrl: 'http://camdenassembly.com/whats-on/?range=live-show'},
      {venueName: 'KOKO', venueUrl: 'http://www.koko.uk.com/listings'},
      {venueName: 'Dingwalls', venueUrl: 'http://dingwalls.com/listings/'},
      {venueName: 'Dirty South', venueUrl: 'http://www.ticketmaster.co.uk/'},
      {venueName: 'Amersham Arms', venueUrl: 'https://www.facebook.com/pg/amersham.arms/events/'},
      {venueName: 'Bull & Gate', venueUrl: 'http://www.bullandgatenw5.co.uk/whats-on'},
      {venueName: 'Borderline', venueUrl: 'http://borderline.london/listings/'},
      {venueName: 'Scala', venueUrl: 'http://scala.co.uk/'},
      {venueName: "Old Queens Head", venueUrl: 'http://theoldqueenshead.com/whats-on/'},
      {venueName: 'XOYO', venueUrl: 'http://xoyo.co.uk/whats-on'},
      {venueName: '100 Club', venueUrl: 'http://www.the100club.co.uk/events-calendar/'},
      {venueName: 'Hope & Anchor', venueUrl: 'http://www.hopeandanchor-islington.co.uk/dates-diary'},
      {venueName: 'Cargo', venueUrl: 'http://cargo-london.com/events/'},
      {venueName: 'Servant Jazz Quarters', venueUrl: 'http://servantjazzquarters.com/'},
      {venueName: 'St Moritz', venueUrl: 'http://www.stmoritzclub.co.uk/whats-on'},
      {venueName: 'Lock Tavern', venueUrl: 'http://www.lock-tavern.com/event-list/'},
      {venueName: 'Black Heart', venueUrl: 'http://www.ourblackheart.com/'},
      {venueName: 'Purple Turtle', venueUrl: 'http://www.purpleturtlebar.com/camden_holding/index.html'},
      {venueName: 'Victoria', venueUrl: 'http://www.jaguarshoes.com/venues/the-victoria/'},
      {venueName: 'Cafe Oto', venueUrl: 'https://www.cafeoto.co.uk/events/'},
      {venueName: 'The Islington', venueUrl: 'https://www.theislington.com/events/'},
      {venueName: 'Macbeth', venueUrl: 'http://www.themacbeth.co.uk/events/'},
      {venueName: 'Waiting Room', venueUrl: 'http://waitingroomn16.com/event-list/'},
      {venueName: 'Green Note', venueUrl: 'http://www.greennote.co.uk/events-page/'},
      {venueName: 'Lewis Cubitt Square', venueUrl: 'https://www.kingscross.co.uk/lewis-cubitt-square'},
      {venueName: 'The Finsbury', venueUrl: 'http://www.thefinsbury.co.uk/listings/'},
      {venueName: 'The Sound Lounge', venueUrl: 'http://www.thesoundlounge.org.uk/'},
      {venueName: 'Slaughtered Lamb', venueUrl: 'http://slamb.glasswerk.co.uk/'},
      {venueName: 'Surya', venueUrl: 'http://www.suryalondon.com/events/'},
      {venueName: 'Troubadour', venueUrl: 'https://troubadourlondon.yapsody.com/'},
      {venueName: 'The Half Moon', venueUrl: 'https://tickets.halfmoon.co.uk/'},
      {venueName: 'Water Rats', venueUrl: 'http://thewaterratsvenue.london/listings.html'},
      {venueName: 'The Pickle Factory', venueUrl: 'https://ovalspace.co.uk/events'},
      {venueName: 'Corsica Studios', venueUrl: 'hhttp://www.corsicastudios.com/whats-on/'},
      {venueName: 'Jazz Cafe', venueUrl: 'http://thejazzcafelondon.com/whats-on'},
      {venueName: 'Kamio', venueUrl: 'http://www.iamkam.io/events'},
      {venueName: 'ECHOES', venueUrl: 'http://archspace.london/'},
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
