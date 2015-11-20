import {
  APP_LOADING,
  PROXIES_SUCCESS,
  PROXIES_FAILURE,
} from '../actions/proxy';

const defaultState = {
  proxies: [],
  isError: false,
  errorMessage: '',
  isLoading: false,
};

export default function proxy(state = defaultState, action) {
  switch (action.type) {
  case APP_LOADING:
    return Object.assign({}, ...state, { isLoading: true });
  case PROXIES_SUCCESS:
    return Object.assign({}, ...state, { proxies: action.proxies, isLoading: false });
  case PROXIES_FAILURE:
    return Object.assign({}, ...defaultState, { isError: true, errorMessage: action.err });
  default:
    return state;
  }
}
