import axios from 'axios';

export default class Request {

  constructor() {
    this.url = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080';
  }

  doGet(url, params) {
    try {
      var queryParams = '';
      var first = true;

      if (params) {
        var keys = Object.keys(params)
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (first) {
            queryParams += '?';
            first = false;
          } else {
            queryParams += '&';
          }
          queryParams += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }
      }

    	return axios.get(this.url + url + queryParams);
  	} catch (e) {
  		console.error(e);
  	}
  }

  doPost(url, data) {
  	try {
  		return axios.post(this.url + url, data);
  	} catch (e) {
  		console.error(e);
  	}
  }
}