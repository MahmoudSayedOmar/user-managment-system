import { compnayInitialState } from "./Layout/state";

import { AuthorizationInitialState } from "./Authorization/state"
export type State = {
  authorization:AuthorizationInitialState,
  company: compnayInitialState
};

export const initialState = {
  authorization:AuthorizationInitialState,
  company: compnayInitialState
};
