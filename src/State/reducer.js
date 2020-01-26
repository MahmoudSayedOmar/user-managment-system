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
import { initialState } from "./state";

import storage from "redux-persist/lib/storage";

export const appReducer = combineReducers({
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

export const combinedReducer = (state, action) => {
  debugger;
  if (action.type === "USER_LOGOUT") {
    state = initialState;
    debugger;
    storage.removeItem("persist:root");
  }

  return appReducer(state, action);
};
