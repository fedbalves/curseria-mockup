import {
  AUTH_LOGIN,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGOUT,
  AUTH_LOGOUT_FULFILLED,
  AUTH_LOGOUT_REJECTED,
  AUTH_PASSWORD_CONFIRMATION,
  AUTH_PASSWORD_CONFIRMATION_FULFILLED,
  AUTH_PASSWORD_CONFIRMATION_REJECTED,
  AUTH_RECOVER_PASSWORD,
  AUTH_RECOVER_PASSWORD_FULFILLED,
  AUTH_RECOVER_PASSWORD_REJECTED,
} from './types';

export const authRecoverPassword = payload => ({ type: AUTH_RECOVER_PASSWORD, payload })
export const authRecoverPasswordFulfilled = payload => ({ type: AUTH_RECOVER_PASSWORD_FULFILLED, payload })
export const authRecoverPasswordRejected = payload => ({ type: AUTH_RECOVER_PASSWORD_REJECTED, payload })

export const passwordConfirmation = payload => ({ type: AUTH_PASSWORD_CONFIRMATION, payload })
export const passwordConfirmationFulfilled = payload => ({ type: AUTH_PASSWORD_CONFIRMATION_FULFILLED, payload })
export const passwordConfirmationRejected = payload => ({ type: AUTH_PASSWORD_CONFIRMATION_REJECTED, payload })

export const authLogin = payload => ({ type: AUTH_LOGIN, payload })
export const authLoginFulfilled = payload => ({ type: AUTH_LOGIN_FULFILLED, payload })
export const authLoginRejected = payload => ({ type: AUTH_LOGIN_REJECTED, payload })

export const authLogout = payload => ({ type: AUTH_LOGOUT, payload })
export const authLogoutFulfilled = payload => ({ type: AUTH_LOGOUT_FULFILLED, payload })
export const authLogoutRejected = payload => ({ type: AUTH_LOGOUT_REJECTED, payload })
