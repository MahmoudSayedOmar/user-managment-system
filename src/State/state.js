import { companiesInitialState, companiesState } from "./Corporates/state";
import { usersInitialState, usersState } from "./Users/state";
import {
  AuthorizationInitialState,
  AuthorizationState
} from "./Authorization/state";
import {
  applicationsPortofoliosInitialState,
  applicationsPortofoliosState
} from "./ApplicationsPortofolio/state";
import {
  defaultApplicationInitialState,
  defaultApplicationState
} from "./DefaultApplications/state";
export type State = {
  authorization: AuthorizationState,
  companies: companiesState,
  users: usersState,
  defaultApplications: defaultApplicationState,
  applicationsPortofolios: applicationsPortofoliosState
};

export const initialState = {
  authorization: AuthorizationInitialState,
  companies: companiesInitialState,
  users: usersInitialState,
  defaultApplications: defaultApplicationInitialState,
  applicationsPortofolios: applicationsPortofoliosInitialState
};
