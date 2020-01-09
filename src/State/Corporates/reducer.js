// import { handleActions } from "redux-actions";

import * as actions from "./action-creator";
import * as types from "./actions";
import { companiesInitialState, companiesState } from "./state";

// types is your main object under state, so when call it will be state.types.company

type Action =
  | actions.ON_VIEW_COMPIES_ACTION
  | actions.ON_VIEW_COMPANIES_SUCCESS_ACTION
  | actions.ON_DEACTIVATE_COMPANY_ACTION
  | actions.ON_DEACTIVATE_COMPANY_SUCCESS_ACTION
  | actions.ON_DEACTIVATE_COMPANY_Fail_ACTION
  | actions.ON_ADD_COMPANY_ACTION
  | actions.ON_ADD_COMPANY_SUCCESS_ACTION
  | actions.ON_VIEW_COMPANIES_FAIL_ACTIONa
  | actions.ON_UPDATE_COMPANY_ACTION
  | actions.ON_UPDATE_COMPANY_SUCCESS_ACTION
  | actions.ON_UPDATE_COMPANY_FAIL_ACTION
  | actions.SELECT_COMPANY_ACTION;

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
        companies: action.payload
      };
    }
    case types.ON_VIEW_COMPANIES_FAIL: {
      return {
        ...state
      };
    }

    case types.ON_ADD_COMPANY_ACTION: {
      return {
        ...state,
        loading: true
      };
    }
    case types.ON_ADD_COMPANY_SUCCESS_ACTION: {
      return {
        ...state,
        companies: action.payload
      };
    }
    case types.ON_ADD_COMPANY_FAIL_ACTION: {
      return {
        ...state
      };
    }

    //////////////////////
    case types.ON_ACTIVATE_COMPANY_ACTION: {
      return {
        ...state,
        loading: true
      };
    }
    case types.ON_ACTIVATE_COMPANY_SUCCESS_ACTION: {
      return {
        ...state,
        companies: action.payload
      };
    }
    case types.ON_ACTIVATE_COMPANY_FAIL_ACTION: {
      return {
        ...state
      };
    }
    /////////
    case types.ON_DEACTIVATE_COMPANY_ACTION: {
      return {
        ...state,
        loading: true
      };
    }
    case types.ON_DEACTIVATE_COMPANY_SUCCESS_ACTION: {
      return {
        ...state,
        companies: action.payload
      };
    }
    case types.ON_DEACTIVATE_COMPANY_FAIL_ACTION: {
      return {
        ...state
      };
    }
    ////////
    case types.ON_UPDATE_COMPANY_ACTION: {
      return {
        ...state,
        loading: true
      };
    }
    case types.ON_UPDATE_COMPANY_SUCCESS_ACTION: {
      return {
        ...state,
        companies: action.payload
      };
    }
    case types.ON_UPDATE_COMPANY_FAIL_ACTION: {
      return {
        ...state
      };
    }
    case types.SELECT_COMPANY: {
      console.log("selectCorporate:", state);
      return {
        ...state,
        selectedCompanyId: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
