import fetch from 'isomorphic-fetch';
import { getToken } from './auth';

export default function fetchAPI(method, path, data = {}) {
  return fetch(`http://${window.location.hostname}:3000/${path}`, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.assign(data, {
      token: getToken() || '',
    })),
  }).then(res =>
    res.json().then(json => ({ json, res }))
  ).then(({ json, res }) => {
    if (! res.ok) {
      return Promise.reject(json);
    }

    return json;
  });
}
