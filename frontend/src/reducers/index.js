import { combineReducers } from 'redux';
import itemReducer from './itemReducer'
import userReducer from './userReducer'
import systemReducer from './systemReducer';

const rootReducer = combineReducers({
  system: systemReducer,
  item: itemReducer,
  user: userReducer
})

export default rootReducer;