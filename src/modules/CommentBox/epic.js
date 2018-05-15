import { Observable } from 'rxjs/Observable';
import api from '../../api';

import {
  SUBMIT_COMMENT,
} from './types';

import {
  submitCommentFulfilled,
} from './action';

const postComment = params => Observable.fromPromise(
  api.post('https://api.curseria.com/api/leasson_comments/', {
    leasson_comment: params
  })
)

export const PostCommentEpic = (action$, state) =>
  action$.ofType(SUBMIT_COMMENT)
    .debounceTime(1000)
    .mergeMap(action =>
      postComment(action.payload)
        .mergeMap(response => Observable.of(submitCommentFulfilled(response.data)))
    )
