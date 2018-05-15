import { LoginState } from './model';
import { saveJwtToken } from '../../storage';
import setHeaders from '../../utils/setHeaders';
import {
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  AUTH_LOGIN,
  AUTH_PASSWORD_CONFIRMATION,
  AUTH_PASSWORD_CONFIRMATION_FULFILLED,
  AUTH_PASSWORD_CONFIRMATION_REJECTED,
  AUTH_RECOVER_PASSWORD,
  AUTH_RECOVER_PASSWORD_FULFILLED,
  AUTH_RECOVER_PASSWORD_REJECTED,
} from './types';

import { GET_DEVICES_FULFILLED } from '../Content/types';

export const LoginReducer = (state = LoginState, action) => {
  switch (action.type) {

    case AUTH_LOGIN:

      return {
        ...state,
        error: undefined,
        working: true,
      }

    case AUTH_LOGIN_FULFILLED:
      setHeaders(action.payload.headers)
      saveJwtToken(action.payload.headers)

      return {
        ...state,
        user: action.payload.data.data,
        working: false,
      }

    case AUTH_LOGIN_REJECTED:

      return {
        ...state,
        user: undefined,
        working: false,
        error: action.payload.data ? action.payload.data.errors[0] === 'Invalid login credentials. Please try again.' ? 'Usuário ou senha não conferem.' : 'Ocorreu um erro. Por favor, tente novamente.' : '',
      }

    case AUTH_PASSWORD_CONFIRMATION:

      return {
        ...state,
        working: true,
      }

    case AUTH_PASSWORD_CONFIRMATION_FULFILLED:

      return {
        ...state,
        errorResetPassword: undefined,
        working: false,
      }

    case AUTH_PASSWORD_CONFIRMATION_REJECTED:

      return {
        ...state,
        errorResetPassword: 'Senhas não conferem. Por favor, tente enviar novamente.',
        working: false,
      }

    case AUTH_RECOVER_PASSWORD:

      return {
        ...state,
        working: true,
      }

    case AUTH_RECOVER_PASSWORD_FULFILLED:

      return {
        ...state,
        working: false,
      }

    case AUTH_RECOVER_PASSWORD_REJECTED:

      return {
        ...state,
        working: false,
      }

    case GET_DEVICES_FULFILLED:

      return {
        ...state,
        devices: action.payload
      }

    default:
      return {
        ...state,
        working: false,
      }

  }
}
