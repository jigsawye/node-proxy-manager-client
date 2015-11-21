import {
  PROXIES_SUCCESS,
  PROXIES_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
  CREATE_PROXY_SUCCESS,
  CREATE_PROXY_FAILURE,
} from '../actions/proxy';

const defaultState = {
  proxies: [],
  isError: false,
  errorMessage: '',
  proxy: {},
  modalIsOpen: false,
  modalType: 0,
};

export default function proxy(state = defaultState, action) {
  switch (action.type) {
  case PROXIES_SUCCESS:
    return Object.assign({}, ...state, { proxies: action.proxies });
  case PROXIES_FAILURE:
    return Object.assign({}, ...defaultState, { isError: true, errorMessage: action.err });
  case OPEN_MODAL:
    return Object.assign({}, ...state, { modalIsOpen: true, modalType: action.modalType });
  case CLOSE_MODAL:
    return Object.assign({}, ...state, { modalIsOpen: false });
  case CREATE_PROXY_SUCCESS:
    return state;
  case CREATE_PROXY_FAILURE:
    return state;
  default:
    return state;
  }
}
