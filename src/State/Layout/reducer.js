// import { handleActions } from "redux-actions";

import * as actions from "./action-creator.js";
import * as types from "./actions.js";
import { companiesInitialState, companiesState } from "./state.js";

// types is your main object under state, so when call it will be state.types.company

type Action =
  | actions.ON_VIEW_COMPIES_ACTION
  | actions.ON_VIEW_COMPANIES_SUCCESS_ACTION
  | actions.ON_VIEW_COMPANIES_FAIL_ACTION;
export function companiesReducer(
  state: companiesState = companiesInitialState,
  action: Action
): companiesState {
  switch (action.type) {
    case types.ON_VIEW_COMPANIES: {
      return {
        ...state
      };
    }
    case types.ON_VIEW_COMPANIES_SUCCESS: {
      return {
        ...state,
        company: action.payload
      };
    }
    case types.ON_VIEW_COMPANIES_FAIL: {
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
