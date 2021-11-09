import { combineReducers } from "redux"
import user from "../reducer/user/UserReducer"
import home from "../reducer/home/HomeReducer"
export const rootReducer = combineReducers({ user, home })