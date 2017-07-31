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
    // console.log('noDupeListOfGigs: ' + JSON.stringify(noDupeListOfGigs));

    var displayGigList;

    if (noDupeListOfGigs.length === 1) {
      displayGigList = noDupeListOfGigs[0].name + ' at ' + noDupeListOfGigs[0].venue + '.';
    }
    if (noDupeListOfGigs.length === 2) {
      displayGigList = '1. ' + noDupeListOfGigs[0].name + ' at ' + noDupeListOfGigs[0].venue + '.' + '\n' + '2. ' + noDupeListOfGigs[1].name + ' at ' + noDupeListOfGigs[1].venue + '.';
    }
    if (noDupeListOfGigs.length === 3) {
      displayGigList = '1. ' + noDupeListOfGigs[0].name + ' at ' + noDupeListOfGigs[0].venue + '.' + '\n' + '2. ' + noDupeListOfGigs[1].name + ' at ' + noDupeListOfGigs[1].venue + '.' + '\n' + '3. ' + noDupeListOfGigs[2].name + ' at ' + noDupeListOfGigs[2].venue + '.';
    }
    if (noDupeListOfGigs.length === 4) {
      displayGigList = '1. ' + noDupeListOfGigs[0].name + ' at ' + noDupeListOfGigs[0].venue + '.' + '\n' + '2. ' + noDupeListOfGigs[1].name + ' at ' + noDupeListOfGigs[1].venue + '.' + '\n' + '3. ' + noDupeListOfGigs[2].name + ' at ' + noDupeListOfGigs[2].venue + '.' + '\n' + '4. ' + noDupeListOfGigs[3].name + ' at ' + noDupeListOfGigs[3].venue + '.';
    }
    if (noDupeListOfGigs.length >= 5) {
      displayGigList = '1. ' + noDupeListOfGigs[0].name + ' at ' + noDupeListOfGigs[0].venue + '.' + '\n' + '2. ' + noDupeListOfGigs[1].name + ' at ' + noDupeListOfGigs[1].venue + '.' + '\n' + '3. ' + noDupeListOfGigs[2].name + ' at ' + noDupeListOfGigs[2].venue + '.' + '\n' + '4. ' + noDupeListOfGigs[3].name + ' at ' + noDupeListOfGigs[3].venue + '.' + '\n' + '5. ' + noDupeListOfGigs[4].name + ' at ' + noDupeListOfGigs[4].venue + '.';
    }

    return (
      <div className="text-left">
        <h4 id="list-header">Today's tiny gigs...</h4>
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
