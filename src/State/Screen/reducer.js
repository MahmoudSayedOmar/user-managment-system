import { screenState, screenInitialState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_GET_ALL_SCREENS_Action
  | actions.ON_GET_ALL_SCREENS_SUCCESS_Action
  | actions.ON_GET_ALL_SCREENS_FAIL_Action;

export function screenReducer(
  state: screenState = screenInitialState,
  action: Action
): screenState {
  switch (action.type) {
    case types.ON_GET_ALL_SCREENS: {
      return {
        ...state,
        loading: true
      };
    }

    case types.ON_GET_ALL_SCREENS_SUCCESS: {
      return {
        ...state,
        screens: action.payload,
        loading: false
      };
    }

    case types.ON_GET_ALL_SCREENS_FAIL: {
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
