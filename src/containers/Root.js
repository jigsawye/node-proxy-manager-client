/* global __DEVTOOLS__ */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';
import configureStore from '../store/configureStore';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../routes';

const store = configureStore();
const history = createBrowserHistory();

syncReduxAndRouter(history, store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Router history={history} children={routes} />
      </Provider>
    );
  }
}
