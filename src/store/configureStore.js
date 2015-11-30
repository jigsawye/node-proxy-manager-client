import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';


const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});


let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'development') {
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, promiseMiddleware, loggerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
  )(createStore);
}

/**
 * Creates a preconfigured store.
 */
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
