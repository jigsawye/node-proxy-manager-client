import {
  LOGIN_SUBMITING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/auth';
import { login, logout } from '../utils/auth';

const defaultState = {
  isLoginSubmitting: false,
  loginFail: false,
  loginFailMessage: '',
  username: '',
};

export default function auth(state = defaultState, action) {
  switch (action.type) {
  case LOGIN_SUBMITING:
    return Object.assign({}, state, {
      isLoginSubmitting: true
    });
  case LOGIN_FAILURE:
    return Object.assign({}, state, {
      isLoginSubmitting: false,
      loginFail: true,
      loginFailMessage: action.error,
    });
  case LOGIN_SUCCESS:
    login(action.token);
    return Object.assign({}, defaultState, {
      username: action.username
    });
  case LOGOUT:
    logout();
    return defaultState;
  default:
    return state;
  }
}
