import fetchAPI from '../utils/fetch';
import { sendSuccessNofif, sendFailureNofif } from './notification';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const RESET_MODAL = 'RESET_MODAL';

export function resetModal() {
  return {
    type: RESET_MODAL,
  };
}

export function openModal(modalType) {
  return {
    type: OPEN_MODAL,
    modalType,
  };
}

export function closeModal() {
  return dispatch => {
    dispatch(resetModal());
    return dispatch({
      type: CLOSE_MODAL,
    });
  };
}

export const PROXIES_REQUEST = 'PROXIES_REQUEST';
export const PROXIES_SUCCESS = 'PROXIES_SUCCESS';

export function proxiesRequest() {
  return dispatch => {
    return fetchAPI('get', 'proxies')
      .then(proxies => dispatch({
        type: PROXIES_SUCCESS,
        proxies,
      }))
      .catch(err => dispatch(sendFailureNofif(err)));
  };
}

export function createProxyRequest(proxy) {
  return dispatch => {
    return fetchAPI('post', 'proxies', proxy)
      .then(() => {
        dispatch(proxiesRequest());
        dispatch(closeModal());
        dispatch(resetModal());
        dispatch(sendSuccessNofif('create proxy success'));
      })
      .catch(err => dispatch(sendFailureNofif(err)));
  };
}

export const PROXY_SUCCESS = 'PROXY_SUCCESS';

export function proxySuccess(proxy) {
  return {
    type: PROXY_SUCCESS,
    proxy,
  };
}

export function fetchProxy(id) {
  return dispatch => {
    return fetchAPI('get', `proxies/${id}`)
      .then(json => {
        dispatch(proxySuccess(json));
        dispatch(openModal(1));
      })
      .catch(err => dispatch(sendFailureNofif(err)));
  };
}

export function updateProxy(id, data) {
  return dispatch => {
    return fetchAPI('put', `proxies/${id}`, data)
      .then(() => {
        dispatch(proxiesRequest());
        dispatch(closeModal());
        dispatch(resetModal());
        dispatch(sendSuccessNofif('Update proxy success'));
      })
      .catch(err => dispatch(sendFailureNofif(err)));
  };
}

export function deleteProxy(id) {
  return dispatch => {
    return fetchAPI('delete', `proxies/${id}`)
      .then(() => {
        dispatch(sendSuccessNofif('delete proxy success'));
        dispatch(proxiesRequest());
      })
      .catch(err => dispatch(sendFailureNofif(err)));
  };
}
