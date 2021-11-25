import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import canvas from './canvas';

export default combineReducers({
  alert,
  auth,
  canvas,
});
