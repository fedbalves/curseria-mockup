import {
  SUBMIT_COMMENT,
  SUBMIT_COMMENT_FULFILLED,
  SUBMIT_COMMENT_REJECTED,
} from './types';

export const submitComment = payload => ({ type: SUBMIT_COMMENT, payload })
export const submitCommentFulfilled = payload => ({ type: SUBMIT_COMMENT_FULFILLED, payload })
export const submitCommentRejected = payload => ({ type: SUBMIT_COMMENT_REJECTED, payload })
