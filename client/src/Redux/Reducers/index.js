import {combineReducers} from "redux";
import countriesReducer from "../Reducers/countriesReducer";

export const rootReducer = combineReducers({countriesReducer});