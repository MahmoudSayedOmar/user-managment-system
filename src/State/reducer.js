import { combineReducers } from "redux";
import { companiesReducer } from "./Corporates/reducer";
import { usersReducer } from "./Users/reducer";
import { authorizationReducer } from "./Authorization/reducer";
import { defaultApplicationReducer } from "./DefaultApplications/reducer";

export const combinedReducer = combineReducers({
  authorization: authorizationReducer,
  companies: companiesReducer,
  users: usersReducer,
  defaultApplications:defaultApplicationReducer
});
