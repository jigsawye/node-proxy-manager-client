import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import auth from './auth';


const rootReducer = combineReducers({
  routing: routeReducer,
  auth,
});


export default rootReducer;
