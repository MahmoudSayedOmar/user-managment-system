import { companiesInitialState } from "./Layout/state";
import { usersInitialState } from "./Users/state";
import { AuthorizationInitialState } from "./Authorization/state";

export type State = {
  authorization: AuthorizationInitialState,
  company: compnayInitialState
};

export const initialState = {
  authorization: AuthorizationInitialState,
  companies: companiesInitialState,
  users: usersInitialState
};
