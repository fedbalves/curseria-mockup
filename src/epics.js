import { combineEpics } from 'redux-observable';

import { AuthLoginEpic, AuthPasswordConfirmation, AuthRecoverPasswordEpic, AuthLogoutEpic } from './modules/Login/epic';
import { LoadContentEpic, GetDevicesEpic } from './modules/Content/epic';
import { PostCommentEpic } from './modules/CommentBox/epic';
import { PostNoteEpic, WatchVideoEpic } from './modules/Vimeo/epic';

export default combineEpics(
    AuthLoginEpic,
    AuthPasswordConfirmation,
    LoadContentEpic,
    PostCommentEpic,
    PostNoteEpic,
    GetDevicesEpic,
    AuthRecoverPasswordEpic,
    AuthLogoutEpic,
    WatchVideoEpic,
)
