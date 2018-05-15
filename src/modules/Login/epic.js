import { Observable } from 'rxjs/Observable';
import { push } from 'react-router-redux';
import api from '../../api';

import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_PASSWORD_CONFIRMATION,
  AUTH_RECOVER_PASSWORD,
} from './types';

import {
  authLoginFulfilled,
  authLoginRejected,
  authLogoutFulfilled,
  authLogoutRejected,
  passwordConfirmationFulfilled,
  passwordConfirmationRejected,
  authRecoverPasswordFulfilled,
  authRecoverPasswordRejected,
} from './action';

const doLogout = () => Observable.fromPromise(
  api.delete('https://api.curseria.com/auth/sign_out/')
)

const startLogin = credentials => Observable.fromPromise(
  api.post('https://api.curseria.com/auth/sign_in/', credentials)
)

const passwordConfirmation = credentials => Observable.fromPromise(
  api.post('https://api.curseria.com/api/users/update_password', credentials)
)

const recoverPassword = params => Observable.fromPromise(
  api.post('https://api.curseria.com/api/users/forget_password', params)
)

export const AuthLoginEpic = (action$, state) =>
  action$.ofType(AUTH_LOGIN)
    .debounceTime(1000)
    .mergeMap(action =>
      startLogin(action.payload)
        .mergeMap(response => Observable.merge(
          Observable.of(authLoginFulfilled(response)),
          Observable.of(push(response.data.data['updated_pass'] ? '/classes/home' : '/reset'))
        ))
        .catch(error => Observable.of(authLoginRejected(error)))
    )

export const AuthLogoutEpic = (action$, state) =>
  action$.ofType(AUTH_LOGOUT)
    .debounceTime(1000)
    .mergeMap(action =>
      doLogout(action.payload)
        .mergeMap(response => Observable.merge(
          Observable.of(authLogoutFulfilled(response)),
          Observable.of(push('/'))
        ))
        .catch(error => Observable.of(authLogoutRejected(error)))
    )

export const AuthPasswordConfirmation = (action$, state) =>
  action$.ofType(AUTH_PASSWORD_CONFIRMATION)
    .debounceTime(1000)
    .mergeMap(action =>
      passwordConfirmation(action.payload)
        .mergeMap(response => Observable.merge(
          Observable.of(passwordConfirmationFulfilled(response)),
          Observable.of(push('/classes/home'))
        ))
        .catch(error => Observable.of(passwordConfirmationRejected(error)))
    )

export const AuthRecoverPasswordEpic = (action$, state) =>
  action$.ofType(AUTH_RECOVER_PASSWORD)
    .debounceTime(1000)
    .mergeMap(action =>
      recoverPassword(action.payload)
        .mergeMap(response => Observable.merge(
          Observable.of(authRecoverPasswordFulfilled(response)),
          Observable.of(push('/success_recover'))
        ))
        .catch(error => Observable.of(authRecoverPasswordRejected(error)))
    )
