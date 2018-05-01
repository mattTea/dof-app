var axios = require('axios');

var tinyVenues = 'KovZ9177WvV,KovZ9177M50,Z598xZL4Zak1F,ZFr9jZFekA,KovZpZAtFe6A,KovZ91773p0,KovZ91779sV,KovZpZAt6kkA,KovZpZAt6kkA,KovZ9177obf,Z598xZL4ZFFd1';

var dPlus = new Date();
dPlus.setDate(dPlus.getDate() + 30);
var d2 = dPlus.getDate();
var m2 = dPlus.getMonth()+1; //January is 0!
var yyy2 = dPlus.getFullYear();
if(d2 < 10) {
    d2 = '0' + d2
}
if(m2 < 10) {
    m2 = '0' + m2
}
var beforeDate = yyy2 + '-' + m2 + '-' + d2 + 'T12:00:00Z'

var dNeg = new Date();
dNeg.setDate(dNeg.getDate() - 30);
var dNeg2 = dNeg.getDate();
var mNeg2 = dNeg.getMonth()+1; //January is 0!
var yNeg2 = dNeg.getFullYear();
if(dNeg2 < 10) {
    dNeg2 = '0' + dNeg2
}
if(mNeg2 < 10) {
    mNeg2 = '0' + mNeg2
}
var afterDate = yNeg2 + '-' + mNeg2 + '-' + dNeg2 + 'T12:00:00Z'

const TICKETMASTER_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=IHG9ubdkcGYkGDyAaNAmnUe9X3709P3h&countryCode=GB&city=London&size=199&venueId=' + tinyVenues + '&startDateTime=' + afterDate + '&endDateTime=' + beforeDate;

// startDateTime: Filter events with a start date after this date (afterDate variable)
// endDateTime: Filter events with a start date before this date
// I need to add a range of startDateTimes to TM URL so they are no specific

module.exports = {
  getGigs: function (gigs) {
    var requestUrl = `${TICKETMASTER_URL}`;
    console.log(requestUrl);

    return axios.get(requestUrl).then(function (res) {
      console.log(res.data);
      return res.data;
    }, function (err) {
      alert('promise error', err);
    });
  }
}

/*
Venues:
KovZ9177U3f   Lyric Theatre (for test purposes) - not included above
KovZ9177WvV   Hampstead Theatre
KovZ9177M50   Menier Chocolate Factory
Z598xZL4Zak1F Menier Chocolate Factory
ZFr9jZFekA    Almeida Theatre - London
KovZpZAtFe6A  Battersea Arts Centre
KovZ91773p0   King's Head Theatre
KovZ91779sV   Arcola Theatre
KovZpZAt6kkA  Old Red Lion Theatre
KovZpZAntFFA  Old Red Lion Theatre
KovZ9177obf   Hen and Chickens Theatre
Z598xZL4ZFFd1 Little Angel Theatre
*/
