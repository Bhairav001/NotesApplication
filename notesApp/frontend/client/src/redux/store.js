import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {thunk} from "redux-thunk"
import {reducer as noteReducer} from "./notes/reducer"
import { reducer as authReducer } from "./Authentication/reducer"

let rootReducer = combineReducers({noteReducer, authReducer})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

