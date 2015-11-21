import {
  PROXIES_SUCCESS,
  PROXIES_FAILURE,
} from '../actions/proxy';

const defaultState = {
  proxies: [],
  isError: false,
  errorMessage: '',
};

export default function proxy(state = defaultState, action) {
  switch (action.type) {
  case PROXIES_SUCCESS:
    return Object.assign({}, ...state, { proxies: action.proxies });
  case PROXIES_FAILURE:
    return Object.assign({}, ...defaultState, { isError: true, errorMessage: action.err });
  default:
    return state;
  }
}
