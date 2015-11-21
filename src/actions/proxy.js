import fetchAPI from '../utils/fetch';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(modalType) {
  return {
    type: OPEN_MODAL,
    modalType,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
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
    return fetchAPI('get', 'proxies')
      .then(json => dispatch(proxiesSuccess(json)))
      .catch(json => dispatch(proxiesFailure(json)));
  };
}

export const PROXY_MODAL_SUBMITTING = 'PROXY_MODAL_SUBMITTING';

export const CREATE_PROXY_REQUEST = 'CREATE_PROXY_REQUEST';
export const CREATE_PROXY_SUCCESS = 'CREATE_PROXY_SUCCESS';
export const CREATE_PROXY_FAILURE = 'CREATE_PROXY_FAILURE';

export function createProxySuccess(msg) {
  return {
    type: CREATE_PROXY_SUCCESS,
    msg,
  };
}

export function createProxyFailure(err) {
  return {
    type: CREATE_PROXY_FAILURE,
    err,
  };
}

export function createProxyRequest(proxy) {
  return dispatch => {
    return fetchAPI('post', 'proxies', proxy)
      .then(json => {
        dispatch(createProxySuccess(json));
        dispatch(proxiesRequest());
        dispatch(closeModal());
      })
      .catch(json => dispatch(createProxyFailure(json)));
  };
}
