import {
  LOAD_APP_FULFILLED,
  LOAD_APP_REJECTED,
  LOAD_APP,
} from './types';

import {
  SUBMIT_COMMENT_FULFILLED,
} from '../CommentBox/types';

import {
  SUBMIT_NOTES_FULFILLED,
} from '../Vimeo/types';

// import setHeaders from '../../utils/setHeaders';
// import { saveJwtToken } from '../../storage';
import findIndex from 'lodash/findIndex';

import { ContentModel } from './model';

export const ContentReducer = (state = ContentModel, action) => {
  switch (action.type) {

    case LOAD_APP:

      return {
        ...state,
        course: {},
        fetching: true,
      }

    case LOAD_APP_FULFILLED:

      return {
        ...state,
        course: action.payload.data,
        fetching: false,
      }

    case LOAD_APP_REJECTED:
      // setHeaders()
      // saveJwtToken({})

      return {
        ...state,
        course: {},
        fetching: false,
      }

    case SUBMIT_COMMENT_FULFILLED:

      state.course.leassons[findIndex(state.course.leassons, item => item.id === action.payload.leasson_id)].comments.push(action.payload)

      return {
        ...state
      }

    case SUBMIT_NOTES_FULFILLED:

      state.course.leassons[findIndex(state.course.leassons, item => item.id === action.payload.leasson_id)].bookmarks.push(action.payload)

      return {
        ...state,
      }

    default:
      return {
        ...state,
      }

  }
}
