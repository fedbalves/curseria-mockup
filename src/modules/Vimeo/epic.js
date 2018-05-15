import { Observable } from 'rxjs/Observable';
import api from '../../api';

import {
  SUBMIT_NOTES,
  WATCH_VIDEO,
} from './types';

import {
  submitNotesFulfilled,
} from './action';

const postNote = params => Observable.fromPromise(
  api.post('https://api.curseria.com/api/bookmarks/', {
    bookmark: params
  })
)

const tickVideo = params => Observable.fromPromise(
  api.post('https://api.curseria.com/api/leasson_statuses/', {
    leasson_status: params
  })
)

export const PostNoteEpic = (action$, state) =>
  action$.ofType(SUBMIT_NOTES)
    .mergeMap(action =>
      postNote(action.payload)
        .mergeMap(response => Observable.of(submitNotesFulfilled(response.data)))
    )

export const WatchVideoEpic = (action$) =>
  action$.ofType(WATCH_VIDEO)
    .throttleTime(15000)
    .do(action => tickVideo(action.payload))
