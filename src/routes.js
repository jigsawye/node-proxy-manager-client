import React from 'react';
import { IndexRedirect, Route, IndexRoute } from 'react-router';
import App from './containers/App';
import * as containers from './containers';
import { shouldLogin, shouldNotLogin } from './utils/redirect';

const {
  LoginPage
} = containers;

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="proxies" />
    <Route path="proxies" onEnter={shouldLogin}>
      <IndexRoute />
      <Route path=":host" />
    </Route>
    <Route path="login" onEnter={shouldNotLogin} component={LoginPage} />
  </Route>
);
