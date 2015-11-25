import fetchAPI from '../utils/fetch';
import { updatePath } from 'redux-simple-router';
import { sendSuccessNofif } from './notification';

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

function loginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    token,
  };
}

function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

export function logout() {
  return dispatch => {
    dispatch(sendSuccessNofif('Logout Success!'));
    return dispatch({
      type: LOGOUT,
    });
  };
}

export function loginSubmit(user) {
  return dispatch => {
    dispatch(loginSubmiting());
    return fetchAPI('post', 'auth/login', user)
      .then(json => {
        dispatch(loginSuccess(json.token));
        dispatch(updatePath('/proxies'));
        dispatch(sendSuccessNofif('Login Success!'));
      })
      .catch(json => dispatch(loginFailure(json.error)));
  };
}
