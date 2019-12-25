import { compnayInitialState } from "./Layout/state";

import { AuthorizationInitialState , AuthorizationState } from "./Authorization/state"

import { defaultApplicationInitialState,defaultApplicationState } from "./DefaultApplications/state"

export type State = {
  authorization:AuthorizationState,
  company: compnayInitialState,
  defaultApplications:defaultApplicationState
};

export const initialState = {
  authorization:AuthorizationInitialState,
  company: compnayInitialState,
  defaultApplications:defaultApplicationInitialState,
};
