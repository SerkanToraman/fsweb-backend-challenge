import { combineReducers } from 'redux';
import  {usersReducer}  from './userReducer';


export const reducers = combineReducers({
  usersReducer,
});