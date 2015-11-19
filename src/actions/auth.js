import fetchAPI from '../utils/fetch';
import { updatePath } from 'redux-simple-router';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUBMITING = 'LOGIN_SUBMITING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

function loginSubmiting() {
  return {
    type: LOGIN_SUBMITING,
  };
}

function loginSuccess(token, username) {
  return {
    type: LOGIN_SUCCESS,
    token,
    username,
  };
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function loginSubmit(user) {
  return dispatch => {
    dispatch(loginSubmiting());
    return fetchAPI('post', 'auth/login', user)
      .then(json => {
        dispatch(loginSuccess(json.token, user.username));
        dispatch(updatePath('/proxies'));
      })
      .catch(json => dispatch(loginFailure(json.error)));
  };
}
