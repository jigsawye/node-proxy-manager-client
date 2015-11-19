import { isLogined } from './auth';

export function shouldLogin(nextState, replaceState) {
  if (! isLogined()) {
    replaceState(null, '/login');
  }
}

export function shouldNotLogin(nextState, replaceState) {
  if (isLogined()) {
    replaceState(null, '/proxies');
  }
}
