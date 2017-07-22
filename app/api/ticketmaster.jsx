var axios = require('axios');

var tinyVenues = 'KovZ9177Akf,KovZ9177ko0,KovZpZAt6F7A,KovZpZAtFJEA,Z698xZL4Za5-R,Z598xZL4ZkA67,KovZpZAnE1eA,KovZ9177PFf';

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

var afterDate = yyyy + '-' + mm + '-' + (dd - 1) + 'T18:00:00Z'
var beforeDate = yyyy + '-' + mm + '-' + (dd + 1) + 'T18:00:00Z'

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
