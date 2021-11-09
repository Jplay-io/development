import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./reducer/RootReducer"
import thunk from "redux-thunk"
export const Store = createStore(rootReducer, applyMiddleware(thunk))