var axios = require('axios');

const TICKETMASTER_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=IHG9ubdkcGYkGDyAaNAmnUe9X3709P3h&countryCode=GB&city=London&localDate=';
// TM api format = "dateTime": "2017-07-07T20:00:00Z"
// alternative is "localDate": "2017-07-07"

module.exports = {
  getGigs: function (gigs) {
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth()+1; //January is 0!
    // var yyyy = today.getFullYear();
    // if(dd < 10) {
    //     dd = '0' + dd
    // }
    // if(mm < 10) {
    //     mm = '0' + mm
    // }
    // today = yyyy + '-' + mm + '-' + dd;
    //
    // var encodedDate = encodeURIComponent(today);
    // var requestUrl = `${TICKETMASTER_URL}&q=${encodedDate}`;
    var requestUrl = `${TICKETMASTER_URL}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res.data); // maybe just res
      return res.data; // maybe just res
    }, function (err) {
      alert('promise error', err);
    });
  }
}
