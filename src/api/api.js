import axios from 'axios';

// GET /courses
module.exports = {
  getCourses: function (courses) {
    const apiUrl = '/courses';

    return axios.get(apiUrl).then(function (res) {
      console.log(res.data);
      return res.data;
    }, function (err) {
      alert('promise error', err);
    });
  }
}
