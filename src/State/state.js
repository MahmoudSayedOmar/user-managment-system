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

import { rolesInitialState, rolesState } from "./Roles/state";

import { menusInitialState, menusState } from "./Menus/state";

import { modulesInitialState, ModulesState } from "./ExtraModules/state";
import { screenInitialState, screenState } from "./Screen/state";

import {RoleControlInitialState,RoleControlState} from "./RoleControls/state"

export type State = {
  authorization: AuthorizationState,
  companies: companiesState,
  users: usersState,
  defaultApplications: defaultApplicationState,
  applicationsPortofolios: applicationsPortofoliosState,
  modules: ModulesState,
  submitCode: submitCodeState,
  roles: rolesState,
  menus: menusState,
  screens: screenState,
  roleControl:RoleControlState
};

export const initialState = {
  authorization: AuthorizationInitialState,
  companies: companiesInitialState,
  users: usersInitialState,
  defaultApplications: defaultApplicationInitialState,
  applicationsPortofolios: applicationsPortofoliosInitialState,
  modules: modulesInitialState,
  submitCode: submitCodeInitialState,
  roles: rolesInitialState,
  menus: menusInitialState,
  screens: screenInitialState,
  roleControl:rolesInitialState
};
