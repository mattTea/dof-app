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
      if (gigs._embedded.events[i].dates.start.localDate === todayFormat) {
        tinyGigs.push(gigs._embedded.events[i])
      }
    }

    console.log('tinyGigs.length: ' + tinyGigs.length);
    console.log(JSON.stringify(tinyGigs));

    var listOfGigs = [];

    if (tinyGigs.length > 0) {
      for (var i = 0; i < tinyGigs.length; i++) {
        listOfGigs.push({
          name: tinyGigs[i].name,
          venue: tinyGigs[i]._embedded.venues[0].name
        });
      }
      console.log(JSON.stringify(listOfGigs));
    } else {
      return <h5 className="text-center">Sad times, there are no tiny gigs tonight.</h5>;
    }

    var displayGigList;

    if (listOfGigs.length === 1) {
      displayGigList = listOfGigs[0].name + ' at ' + listOfGigs[0].venue + '.';
    }
    if (listOfGigs.length === 2) {
      displayGigList = '1. ' + listOfGigs[0].name + ' at ' + listOfGigs[0].venue + '.' + '\n' + '2. ' + listOfGigs[1].name + ' at ' + listOfGigs[1].venue + '.';
    }
    if (listOfGigs.length === 3) {
      displayGigList = '1. ' + listOfGigs[0].name + ' at ' + listOfGigs[0].venue + '.' + '\n' + '2. ' + listOfGigs[1].name + ' at ' + listOfGigs[1].venue + '.' + '\n' + '3. ' + listOfGigs[2].name + ' at ' + listOfGigs[2].venue + '.';
    }
    if (listOfGigs.length === 4) {
      displayGigList = '1. ' + listOfGigs[0].name + ' at ' + listOfGigs[0].venue + '.' + '\n' + '2. ' + listOfGigs[1].name + ' at ' + listOfGigs[1].venue + '.' + '\n' + '3. ' + listOfGigs[2].name + ' at ' + listOfGigs[2].venue + '.' + '\n' + '4. ' + listOfGigs[3].name + ' at ' + listOfGigs[3].venue + '.';
    }
    if (listOfGigs.length >= 5) {
      displayGigList = '1. ' + listOfGigs[0].name + ' at ' + listOfGigs[0].venue + '.' + '\n' + '2. ' + listOfGigs[1].name + ' at ' + listOfGigs[1].venue + '.' + '\n' + '3. ' + listOfGigs[2].name + ' at ' + listOfGigs[2].venue + '.' + '\n' + '4. ' + listOfGigs[3].name + ' at ' + listOfGigs[3].venue + '.' + '\n' + '5. ' + listOfGigs[4].name + ' at ' + listOfGigs[4].venue + '.';
    }

    return (
      <div className="text-center">
        <h4>Today's tiny gigs...</h4>
        <div>
          {displayGigList.split("\n").map(i => {
            return <div>{i}</div>;
          })}
        </div>
      </div>
    );
  }
});

module.exports = GigList;
