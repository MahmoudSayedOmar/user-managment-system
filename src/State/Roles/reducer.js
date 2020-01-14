import { rolesState, rolesInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_VIEW_ROLES_BY_USERTYPE_ID_ACTION
  | actions.ON_VIEW_ROLES_BY_USERTYPE_ID_SUCCESS_ACTION
  | actions.ON_VIEW_ROLES_BY_USERTYPE_ID_FAIL_ACTION;

export function rolesReducer(
  state: rolesState = rolesInitialState,
  action: Action
): rolesState {
  switch (action.type) {
    case types.ON_VIEW_ROLES_BY_USERTYPE_ID: {
      return {
        ...state,
        isLoaded: false
      };
    }
    case types.ON_VIEW_ROLES_BY_USERTYPE_ID_SUCCESS: {
      return {
        ...state,
        roles: action.payload,
        isLoaded: true
      };
    }
    case types.ON_VIEW_ROLES_BY_USERTYPE_ID_FAIL: {
      return {
        ...state
      };
    }
    case types.ON_ADD_ROLE: {
      return {
        ...state,
        isLoaded: false
      };
    }
    case types.ON_ADD_ROLE_SUCCESS: {
      var _roles = state.roles;
      _roles.push(action.payload);
      console.log(_roles);
      debugger;
      return {
        ...state,
        roles: _roles,
        isLoaded: true
      };
    }
    case types.ON_ADD_ROLE_FAIL: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
}
