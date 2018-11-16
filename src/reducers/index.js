import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import track from '../ducks/track';
import auth from '../ducks/auth';

export default combineReducers({
  auth,
  track,
  routing: routerReducer,
});
