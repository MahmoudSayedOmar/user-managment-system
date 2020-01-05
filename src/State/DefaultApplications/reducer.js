import {
  defaultApplicationState,
  defaultApplicationInitialState
} from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_GET_ALL_DEFAULTAPPLICATIONS_Action
  | actions.ON_GET_ALL_DEFAULTAPPLICATIONS_SUCCESS_Action
  | actions.ON_GET_ALL_DEFAULTAPPLICATIONS_FAIL_Action;

export function defaultApplicationReducer(
  state: defaultApplicationState = defaultApplicationInitialState,
  action: Action
): AuthorizationState {
  switch (action.type) {
    case types.ON_GET_ALL_DEFAULTAPPLICATIONS: {
      return {
        ...state,
        loading: true
      };
    }

    case types.ON_GET_ALL_DEFAULTAPPLICATIONS_SUCCESS: {
      debugger;
      return {
        ...state,
        defaultApplications: action.payload,
        loading: false
      };
    }

    case types.ON_GET_ALL_DEFAULTAPPLICATIONS_FAIL: {
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
}
