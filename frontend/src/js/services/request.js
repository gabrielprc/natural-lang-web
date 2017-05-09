import axios from 'axios';

export default class Request {

  constructor() {
    this.url = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080';
  }

  doGet(url, params) {
    try {
    	return axios.get(this.url + url, params);
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