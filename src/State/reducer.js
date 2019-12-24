import { combineReducers } from "redux";
import { companyReducer } from "./Layout/reducer";
import { authorizationReducer } from "./Authorization/reducer";
export const combinedReducer = combineReducers({
  authorization: authorizationReducer,
  company: companyReducer
});
