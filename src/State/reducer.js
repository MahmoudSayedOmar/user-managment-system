import { combineReducers } from "redux";
import { companiesReducer } from "./Corporates/reducer";
import { usersReducer } from "./Users/reducer";
import { authorizationReducer } from "./Authorization/reducer";
import { defaultApplicationReducer } from "./DefaultApplications/reducer";
import { applicationsPortofoliosReducer } from "./ApplicationsPortofolio/reducer";
import { moduleReducer } from "./ExtraModules/reducer";
import { submitCodeReducer } from "./SubmitCode/reducer";
import { userTypesReducer } from "./user-types/reducer";
import { rolesReducer } from "./Roles/reducer";
export const combinedReducer = combineReducers({
  authorization: authorizationReducer,
  companies: companiesReducer,
  users: usersReducer,
  defaultApplications: defaultApplicationReducer,
  applicationsPortofolios: applicationsPortofoliosReducer,
  module: moduleReducer,
  submitCode: submitCodeReducer,
  userTypes: userTypesReducer,
  roles: rolesReducer
});
