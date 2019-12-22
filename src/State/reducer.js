import { combineReducers } from "redux";
import { companiesReducer } from "./Layout/reducer";

export const combinedReducer = combineReducers({ companies: companiesReducer });
