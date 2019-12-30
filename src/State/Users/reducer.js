// import { handleActions } from "redux-actions";

import * as actions from "./action-creator.js";
import * as types from "./actions.js";
import { usersInitialState, usersState } from "./state.js";

// types is your main object under state, so when call it will be state.types.company

type Action =
  | actions.ON_VIEW_USERS_ACTION
  | actions.ON_VIEW_USERS_SUCCESS_ACTION
  | actions.ON_VIEW_USERS_FAIL_ACTION
  | actions.ON_ADD_USERS_FAIL_ACTION
  | actions.ON_ADD_USERS_FAIL_ACTION
  | actions.ON_ADD_USERS_FAIL_ACTION;
export function usersReducer(
  state: usersState = usersInitialState,
  action: Action
): usersState {
  switch (action.type) {
    case types.ON_VIEW_USERS: {
      return {
        ...state
      };
    }
    case types.ON_VIEW_USERS_SUCCESS: {
      return {
        ...state,
        companies: action.payload
      };
    }
    case types.ON_VIEW_USERS_FAIL: {
      return {
        ...state
      };
    }
    case types.ON_ADD_USER_ACTION: {
      return {
        ...state,
        loading: true
      };
    }
    case types.ON_ADD_USER_SUCCESS: {
      return {
        ...state,
        companies: action.payload
      };
    }
    case types.ON_ADD_USER_FAIL: {
      return {
        ...state
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
