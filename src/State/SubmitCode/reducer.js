import * as actions from "./action-creator";
import * as types from "./actions";
import { submitCodeInitialState, submitCodeState } from "./state";

// types is your main object under state, so when call it will be state.types.company

type Action =
  | actions.ON_SUBMIT_CODE_ACTION
  | actions.ON_SUBMIT_CODE_SUCCESS_ACTION
  | actions.ON_SUBMIT_CODE_FAIL_ACTION;

export function submitCodeReducer(
  state: submitCodeState = submitCodeInitialState,
  action: Action
): submitCodeState {
  switch (action.type) {
    case types.ON_SUBMIT_CODE_SUCCESS_ACTION: {
      return {
        ...state,
        verified: true
      };
    }

    case types.ON_SUBMIT_CODE_FAIL_ACTION: {
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
