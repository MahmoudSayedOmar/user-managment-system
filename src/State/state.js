import { companiesInitialState } from "./Corporates/state";
import { usersInitialState } from "./Users/state";
import { AuthorizationInitialState } from "./Authorization/state";

export type State = {
  authorization: AuthorizationInitialState,
  companies: compnayInitialState,
  users: usersInitialState
};

export const initialState = {
  authorization: AuthorizationInitialState,
  companies: companiesInitialState,
  users: usersInitialState
};
