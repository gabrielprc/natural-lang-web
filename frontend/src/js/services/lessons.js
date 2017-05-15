import Request from './request';

export default {
  getLessons(id) {
    const req = new Request();

    var url = '/exercises';

    if (id) {
    	url += '/' + id;
    }

    return req.doGet(url);
  },
};