import fetch from 'isomorphic-fetch';
import { getToken } from './auth';

const BASE_URL = `http://${window.location.hostname}:${process.env.API_PORT}`;

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

  return fetch(`${BASE_URL}/${path}`, options)
  .then(res => res.json().then(json => ({ json, res })))
  .then(({ json, res }) => {
    if (! res.ok) {
      return Promise.reject(json);
    }

    return json;
  });
}
