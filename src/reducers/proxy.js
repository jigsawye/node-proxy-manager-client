import {
  PROXIES_SUCCESS,
  PROXIES_FAILURE,
  PROXY_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  RESET_MODAL,
} from '../actions/proxy';

const defaultProxy = {
  id: '',
  listen: { host: ''},
  target: { host: '', port: ''},
};

const defaultState = {
  proxy: { ...defaultProxy },
  proxies: [],
  isError: false,
  errorMessage: '',
  modalIsOpen: false,
  modalType: 0,
};

export default function proxy(state = defaultState, action) {
  switch (action.type) {
  case PROXIES_SUCCESS:
    return Object.assign({}, ...state, { proxies: action.proxies, isError: false });
  case PROXIES_FAILURE:
    return Object.assign({}, ...defaultState, { isError: true, errorMessage: action.err });
  case PROXY_SUCCESS:
    return Object.assign({}, ...state, { proxy: action.proxy });
  case OPEN_MODAL:
    return Object.assign({}, ...state, { modalIsOpen: true, modalType: action.modalType });
  case CLOSE_MODAL:
    return Object.assign({}, ...state, { modalIsOpen: false });
  case RESET_MODAL:
    return Object.assign({}, ...state, { proxy: { ...defaultProxy }});
  default:
    return state;
  }
}
