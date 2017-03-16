import { combineReducers } from 'redux';
import monitoring from './monitoring';

const appStore = combineReducers({
  monitoring
});

export default appStore;
