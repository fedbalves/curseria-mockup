import {
  SUBMIT_NOTES,
  SUBMIT_NOTES_FULFILLED,
  SUBMIT_NOTES_REJECTED,
  WATCH_VIDEO,
  DELETE_BOOKMARK,
} from './types';

export const submitNotes = payload => ({ type: SUBMIT_NOTES, payload })
export const submitNotesFulfilled = payload => ({ type: SUBMIT_NOTES_FULFILLED, payload })
export const submitNotesRejected = payload => ({ type: SUBMIT_NOTES_REJECTED, payload })
export const watchVideo = payload => ({ type: WATCH_VIDEO, payload })
export const deleteBookmark = payload => ({ type: DELETE_BOOKMARK, payload })
