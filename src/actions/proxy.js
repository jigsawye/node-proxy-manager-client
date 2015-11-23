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

export const PROXY_SUCCESS = 'PROXY_SUCCESS';
export const PROXY_FAILURE = 'PROXY_FAILURE';

export function proxySuccess(proxy) {
  return {
    type: PROXY_SUCCESS,
    proxy,
  };
}

export function proxyFailure(err) {
  return {
    type: PROXY_FAILURE,
    err,
  };
}

export function fetchProxy(id) {
  return dispatch => {
    return fetchAPI('get', `proxies/${id}`)
      .then(json => {
        dispatch(proxySuccess(json));
        dispatch(openModal(1));
      })
      .catch(json => dispatch(proxyFailure(json)));
  };
}


export const UPDATE_PROXY_SUCCESS = 'UPDATE_PROXY_SUCCESS';
export const UPDATE_PROXY_FAILURE = 'UPDATE_PROXY_FAILURE';

export function updateProxySuccess(msg) {
  return {
    type: UPDATE_PROXY_SUCCESS,
    msg,
  };
}

export function updateProxyFailure(err) {
  return {
    type: UPDATE_PROXY_FAILURE,
    err,
  };
}

export function updateProxy(id, data) {
  return dispatch => {
    return fetchAPI('put', `proxies/${id}`, data)
      .then(json => {
        dispatch(updateProxySuccess(json));
        dispatch(proxiesRequest());
        dispatch(closeModal());
      })
      .catch(json => dispatch(updateProxyFailure(json)));
  };
}


export const DELETE_PROXY_SUCCESS = 'DELETE_PROXY_SUCCESS';
export const DELETE_PROXY_FAILURE = 'DELETE_PROXY_FAILURE';

export function deleteProxySuccess(msg) {
  return {
    type: DELETE_PROXY_SUCCESS,
    msg,
  };
}

export function deleteProxyFailure(err) {
  return {
    type: DELETE_PROXY_FAILURE,
    err,
  };
}

export function deleteProxy(id) {
  return dispatch => {
    return fetchAPI('delete', `proxies/${id}`)
      .then(json => {
        dispatch(deleteProxySuccess(json));
        dispatch(proxiesRequest());
      })
      .catch(json => dispatch(deleteProxyFailure(json)));
  };
}
