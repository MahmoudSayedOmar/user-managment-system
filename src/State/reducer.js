import { combineReducers } from "redux";
import { companiesReducer } from "./Layout/reducer";
import { usersReducer } from "./Users/reducer";

export const combinedReducer = combineReducers({
  companies: companiesReducer,
  users: usersReducer
});
