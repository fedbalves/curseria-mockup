import api from '../api';
import isNil from 'lodash/isNil';
import { saveJwtToken } from '../storage'

const setHeaders = header => {
  if (header && !isNil(header['access-token'])) {
    api.defaults.headers = header
    saveJwtToken(header)
  } else {
    delete api.defaults.headers
  }
}

export default setHeaders
