import { combineReducers } from "redux";
import { companyReducer } from "./Layout/reducer";

export const combinedReducer = combineReducers({ company: companyReducer });
