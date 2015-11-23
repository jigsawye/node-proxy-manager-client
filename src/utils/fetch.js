import fetch from 'isomorphic-fetch';
import { getToken } from './auth';

export default function fetchAPI(method, path, data = {}) {
  const options = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${getToken() || ''}`
    }
  };

  if (method !== 'get') {
    options.body = JSON.stringify(data);
  }

  return fetch(`http://${window.location.hostname}:3000/${path}`, options)
  .then(res => res.json().then(json => ({ json, res })))
  .then(({ json, res }) => {
    if (! res.ok) {
      return Promise.reject(json);
    }

    return json;
  });
}
