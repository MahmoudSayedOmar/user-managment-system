import { companiesInitialState, companiesState } from "./Corporates/state";
import { usersInitialState, usersState } from "./Users/state";
import { submitCodeInitialState, submitCodeState } from "./SubmitCode/state";
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

import { modulesInitialState, ModulesState } from "./ExtraModules/state";

export type State = {
  authorization: AuthorizationState,
  companies: companiesState,
  users: usersState,
  defaultApplications: defaultApplicationState,
  applicationsPortofolios: applicationsPortofoliosState,
  modules: ModulesState,
  submitCode: submitCodeState
};

export const initialState = {
  authorization: AuthorizationInitialState,
  companies: companiesInitialState,
  users: usersInitialState,
  defaultApplications: defaultApplicationInitialState,
  applicationsPortofolios: applicationsPortofoliosInitialState,
  modules: modulesInitialState,
  submitCode: submitCodeInitialState
};
