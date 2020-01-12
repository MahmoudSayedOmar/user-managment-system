import { ModulesState, modulesInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_GET_ALL_MODULES_Action
  | actions.ON_GET_ALL_MODULES_SUCCESS_Action
  | actions.ON_GET_ALL_MODULES_FAIL_Action;

export function moduleReducer(
  state: modulesState = modulesInitialState,
  action: Action
): ModulesState {
  switch (action.type) {
    case types.ON_GET_ALL_MODULES: {
      return {
        ...state,
        loading: true
      };
    }

    case types.ON_GET_ALL_MODULES_SUCCESS: {
      return {
        ...state,
        modules: action.payload,
        loading: false
      };
    }

    case types.ON_GET_ALL_MODULES_FAIL: {
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
