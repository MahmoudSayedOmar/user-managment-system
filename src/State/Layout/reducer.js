// import { handleActions } from "redux-actions";

import * as actions from "./action-creator.js";
import * as types from "./actions.js";
import { compnayInitialState, companyState } from "./state.js";

// types is your main object under state, so when call it will be state.types.company

type Action =
  | actions.ON_VIEW_COMPANY_ACTION
  | actions.ON_VIEW_COMPANY_SUCCESS_ACTION
  | actions.ON_VIEW_COMPANY_FAIL_ACTION;
export function companyReducer(
  state: companyState = compnayInitialState,
  action: Action
): companyState {
  switch (action.type) {
    case types.ON_VIEW_COMPANY: {
      return {
        ...state
      };
    }
    case types.ON_VIEW_COMPANY_SUCCESS: {
      return {
        ...state,
        company: action.payload
      };
    }
    case types.ON_VIEW_COMPANY_FAIL: {
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
