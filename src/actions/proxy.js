import fetchAPI from '../utils/fetch';

export const APP_LOADING = 'APP_LOADING';

function appLoading() {
  return {
    type: APP_LOADING,
  };
}

export const PROXIES_REQUEST = 'PROXIES_REQUEST';
export const PROXIES_SUCCESS = 'PROXIES_SUCCESS';
export const PROXIES_FAILURE = 'PROXIES_FAILURE';

function proxiesSuccess(proxies) {
  return {
    type: PROXIES_SUCCESS,
    proxies,
  };
}

function proxiesFailure(err) {
  return {
    type: PROXIES_FAILURE,
    err,
  };
}

export function proxiesRequest() {
  return dispatch => {
    dispatch(appLoading());
    return fetchAPI('get', 'proxies')
      .then(json => dispatch(proxiesSuccess(json)))
      .catch(json => dispatch(proxiesFailure(json)));
  };
}
