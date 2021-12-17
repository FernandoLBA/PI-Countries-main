import {combineReducers} from "redux";
import countriesReducer from "../Reducers/countriesReducer";
import activitiesReducer from "./activitiesReducer";

export const rootReducer = combineReducers({countriesReducer, activitiesReducer});