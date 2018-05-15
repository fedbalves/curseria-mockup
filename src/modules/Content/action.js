import {
  LOAD_APP,
  LOAD_APP_FULFILLED,
  LOAD_APP_REJECTED,

  GET_DEVICES,
  GET_DEVICES_FULFILLED,
  GET_DEVICES_REJECTED,
} from './types';

export const loadApp = payload => ({ type: LOAD_APP, payload })
export const loadAppFulfilled = payload => ({ type: LOAD_APP_FULFILLED, payload })
export const loadAppRejected = payload => ({ type: LOAD_APP_REJECTED, payload })

export const getDevices = payload => ({ type: GET_DEVICES, payload })
export const getDevicesFulfilled = payload => ({ type: GET_DEVICES_FULFILLED, payload })
export const getDevicesRejected = payload => ({ type: GET_DEVICES_REJECTED, payload })
