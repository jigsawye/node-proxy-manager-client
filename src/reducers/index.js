import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as notifReducer } from 're-notif';
import auth from './auth';
import proxy from './proxy';


const rootReducer = combineReducers({
  routing: routeReducer,
  notifs: notifReducer,
  auth,
  proxy,
});


export default rootReducer;
