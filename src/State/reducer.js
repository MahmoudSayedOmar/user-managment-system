import { combineReducers } from "redux";
import { companiesReducer } from "./Corporates/reducer";
import { usersReducer } from "./Users/reducer";
import { authorizationReducer } from "./Authorization/reducer";
import { defaultApplicationReducer } from "./DefaultApplications/reducer";
import { applicationsPortofoliosReducer } from "./ApplicationsPortofolio/reducer";
import { moduleReducer } from "./ExtraModules/reducer";
import { userTypesReducer } from "./user-types/reducer";

export const combinedReducer = combineReducers({
  authorization: authorizationReducer,
  companies: companiesReducer,
  users: usersReducer,
  defaultApplications: defaultApplicationReducer,
  applicationsPortofolios: applicationsPortofoliosReducer,
  module: moduleReducer,
  userTypes: userTypesReducer
});
