export function login(token) {
  localStorage.token = token;
}

export function logout() {
  delete localStorage.token;
}

export function isLogined() {
  return !! localStorage.token;
}

export function getToken() {
  return localStorage.token;
}
