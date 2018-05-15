import axios from 'axios-es6';
import isNil from 'lodash/isNil';
// import setHeaders from './utils/setHeaders';

axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  })

axios.interceptors.response.use(function (response) {
    if (!isNil(response.headers['access-token'])) {
      // setHeaders(response.headers)
      response.config.headers = response.headers
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  })

export default axios
