import { combineReducers } from "redux";
import salesReducer from './sales'
import loginReducer from './login'

export default combineReducers({ sales: salesReducer, auth: loginReducer })