import {
  RoleScreensControlInitialState,
  RoleScreensControlState
} from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";
import { bindActionCreators } from "redux";

type Action =
  | actions.ON_GET_ROLE_BY_ID_ACTION
  | actions.ON_GET_ROLE_BY_ID_SUCCESS_ACTION
  | actions.ON_GET_ROLE_BY_ID_Fail_ACTION;

export function roleControlReducer(
  state: RoleScreensControlState = RoleScreensControlInitialState,
  action: Action
): RoleControlState {
  switch (action.type) {
    case types.ON_GET_ROLE_BY_ID_SUCCESS: {
      return {
        ...state,
        roleScreenControls: action.payload
      };
    }

    case types.ON_GET_ROLE_BY_ID_Fail: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
}
