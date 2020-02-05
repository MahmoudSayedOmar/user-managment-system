import { AuthorizationState, AuthorizationInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_LOGIN_Action
  | actions.LOGIN_SUCCESS_Action
  | actions.LOGIN_FAIL_Action;

export function authorizationReducer(
  state: AuthorizationState = AuthorizationInitialState,
  action: Action
): AuthorizationState {
  switch (action.type) {
    case types.ON_LOGIN: {
      return {
        ...state,
        loading: true,
        username: action.payload.username
      };
    }

    case types.LOGIN_SUCCESS: {
      // console.log(action.payload);
      return {
        ...action.payload
      };
    }

    case types.LOGIN_FAIL: {
      return {
        ...state,
        isLoggedIn: false,
        errorMessage: action.payload,
        loading: false
      };
    }
    case types.ON_VIEW_PROFILE: {
      return {
        ...state
      };
    }

    case types.VIEW_PROFILE_SUCCESS: {
      console.log(action.payload);
      return {
        ...state,
        userProfile: action.payload
      };
    }

    case types.VIEW_PROFILE_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
