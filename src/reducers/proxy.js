import {
  PROXIES_SUCCESS,
  PROXIES_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../actions/proxy';

const defaultState = {
  proxies: [],
  isError: false,
  errorMessage: '',
  proxy: {},
  modalIsOpen: false,
};

export default function proxy(state = defaultState, action) {
  switch (action.type) {
  case PROXIES_SUCCESS:
    return Object.assign({}, ...state, { proxies: action.proxies });
  case PROXIES_FAILURE:
    return Object.assign({}, ...defaultState, { isError: true, errorMessage: action.err });
  case OPEN_MODAL:
    return Object.assign({}, ...state, { modalIsOpen: true });
  case CLOSE_MODAL:
    return Object.assign({}, ...state, { modalIsOpen: false });
  default:
    return state;
  }
}
