import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import auth from './auth';
import proxy from './proxy';


const rootReducer = combineReducers({
  routing: routeReducer,
  auth,
  proxy,
});


export default rootReducer;
