import { Observable } from 'rxjs/Observable';
import api from '../../api';
import { push } from 'react-router-redux';

import {
  LOAD_APP,
  GET_DEVICES,
} from './types';

import {
  loadAppFulfilled,
  loadAppRejected,
  getDevicesFulfilled,
  getDevicesRejected,
} from './action';

const getCourses = () => Observable.fromPromise(
  api.get('https://api.curseria.com/api/user_courses')
)

const getDevices = () => Observable.fromPromise(
  api.get('https://api.curseria.com/api/devices/')
)

const startApp = data => {
  var host = window.location.host.indexOf('localhost') === 0 ? 'confeitariacomdaninoce' : window.location.host.split('.')[1]

  return Observable.fromPromise(
    api.get(`https://api.curseria.com/api/courses/${host}`)
  )
}

export const LoadContentEpic = (action$, state) =>
  action$.ofType(LOAD_APP)
    .mergeMap(action =>
      getCourses()
        .mergeMap(response =>
          startApp(response.data)
            .mergeMap(res =>
              Observable.of(loadAppFulfilled(res))
            )
            .catch(error =>
              Observable.merge(
                Observable.of(loadAppRejected(error)),
                Observable.of(push('/'))
              )
            )
        )
        .catch(error =>
          Observable.merge(
            Observable.of(loadAppRejected(error)),
            Observable.of(push('/'))
          )
        )
    )

export const GetDevicesEpic = (action$, state) =>
  action$.ofType(GET_DEVICES)
    .mergeMap(action =>
      getDevices()
        .mergeMap(response => Observable.of(getDevicesFulfilled(response.data)))
        .catch(error =>
          Observable.merge(
            Observable.of(getDevicesRejected(error)),
            Observable.of(push('/'))
          )
        )
    )
