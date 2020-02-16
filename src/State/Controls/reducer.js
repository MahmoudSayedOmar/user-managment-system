import { controlState, controlInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_GET_ROLE_CONTROLS_Action
  | actions.ON_GET_ROLE_CONTROLS_SUCCESS_Action
  | actions.ON_GET_ROLE_CONTROLS_FAIL_Action
  | actions.ON_MAP_ROLE_TO_CONTROLS_Action
  | actions.ON_MAP_ROLE_TO_CONTROLS_SUCCESS_Action
  | actions.ON_MAP_ROLE_TO_CONTROLS_FAIL_Action;

export function controlReducer(
  state: controlState = controlInitialState,
  action: Action
): controlState {
  switch (action.type) {
    case types.ON_GET_ROLE_CONTROLS: {
      debugger;
      return {
        ...state,
        loading: true
      };
    }

    case types.ON_GET_ROLE_CONTROLS_SUCCESS: {
      return {
        ...state,
        controls: action.payload,
        loading: false
      };
    }

    case types.ON_GET_ROLE_CONTROLS_FAIL: {
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
