var axios = require('axios');

var tinyVenues = 'KovZ9177Akf,KovZ9177ko0,KovZpZAt6F7A,KovZpZAtFJEA,Z698xZL4Za5-R,Z598xZL4ZkA67,KovZpZAnE1eA,Z698xZL4Za1Dl,KovZ9177h10,KovZ9177Jc7,KovZ9177q6V,KovZ9177DOV,KovZ9177j3V,KovZpZAled6A,KovZ9177EP0,KovZ9177aoV,KovZ91777W7,KovZpZAn6vtA,KovZ9177pof,KovZ9177Ey7,KovZ917731V,KovZ917776f,KovZ91776r0,KovZpZAnIaFA,KovZ91778Q7,KovZpZAnkn1A,Z598xZL4Z67eF,KovZ9177yXV,KovZ91777W0,Z698xZL4ZadAu,KovZ9177upV,KovZ91778vV,KovZ9177370,KovZ9177k0V,KovZ9177437,KovZpZAnEAIA,KovZ9177oe0,KovZpZAlAenA,Z698xZL4ZaGVq,KovZ9177JyV,KovZpZAt1AdA,KovZpZAtFFtA,KovZ9177Jj0,Z698xZL4ZadGA,Z698xZL4Za1nL,KovZ9177XdV,KovZ9177nd0,KovZpZAnaJaA';
// Options for test purposes - O2: KovZ9177PFf, Palladium: KovZ9177gtf

var dPlus = new Date();
dPlus.setDate(dPlus.getDate() + 2);
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
dNeg.setDate(dNeg.getDate() - 2);
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

module.exports = {
  getGigs: function (gigs) {
    var requestUrl = `${TICKETMASTER_URL}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res.data); // maybe just res
      return res.data; // maybe just res
    }, function (err) {
      alert('promise error', err);
    });
  }
}

/*
Venues:
KovZ9177Akf   Garage
KovZ9177ko0   Union Chapel
KovZpZAt6F7A  Birthdays
KovZpZAtFJEA  Dublin Castle
Z698xZL4Za5-R Lexington
Z598xZL4ZkA67 Good Ship
KovZpZAnE1eA  Shacklewell Arms
Z698xZL4Za1Dl Windmill
KovZ9177h10   Nambucca
KovZ9177Jc7   Notting Hill Arts Centre
KovZ9177q6V   Moth Club
KovZ9177DOV   Old Blue Last
KovZ9177j3V   Hoxton Square Bar & Kitchen
KovZpZAled6A  Underworld Camden
KovZ9177EP0   Proud Camden
KovZ9177aoV   Camden Assembly (Barfly)
KovZ91777W7   KOKO
KovZpZAn6vtA  Dingwalls
KovZ9177pof   Dirty South
KovZ9177Ey7   Amersham Arms
KovZ917731V   Bull & Gate
KovZ917776f   Borderline
KovZ91776r0   Scala
KovZpZAnIaFA  Old Queen's Head
KovZ91778Q7   XOYO
KovZpZAnkn1A  100 Club
Z598xZL4Z67eF Hope & Anchor
KovZ9177yXV   Cargo
KovZ91777W0   Servant Jazz Quarters
Z698xZL4ZadAu St Moritz
KovZ9177upV   Lock Tavern
KovZ91778vV   Black Heart
KovZ9177370   Purple Turtle
KovZ9177k0V   Victoria
KovZ9177437   Cafe Oto
KovZpZAnEAIA  The Islington
KovZ9177oe0   Macbeth
KovZpZAlAenA  Waiting Room
Z698xZL4ZaGVq Green Note
KovZ9177JyV   Lewis Cubitt Square
KovZpZAt1AdA  The Finsbury
KovZpZAtFFtA  The Sound Lounge
KovZ9177Jj0   Slaughtered Lamb
Z698xZL4ZadGA Surya
Z698xZL4Za1nL,KovZ9177XdV  Troubadour
KovZ9177nd0   The Half Moon
KovZpZAnaJaA  Jazz Cafe
*/
