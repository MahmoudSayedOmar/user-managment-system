// import { handleActions } from "redux-actions";

import * as actions from "./action-creator";
import * as types from "./actions";
import { userTypesInitialState, userTypesState } from "./state";

// types is your main object under state, so when call it will be state.types.company

type Action =
  | actions.ON_VIEW_USERTYPES_ACTION
  | actions.ON_VIEW_USER_TYPES_SUCCESS_ACTION
  | actions.ON_DEACTIVATE_USER_TYPE_ACTION
  | actions.ON_DEACTIVATE_USER_TYPE_SUCCESS_ACTION
  | actions.ON_DEACTIVATE_USER_TYPE_Fail_ACTION
  | actions.ON_ADD_USER_TYPE_ACTION
  | actions.ON_ADD_USER_TYPE_SUCCESS_ACTION
  | actions.ON_VIEW_USER_TYPES_FAIL_ACTIONa
  | actions.ON_UPDATE_USER_TYPE_ACTION
  | actions.ON_UPDATE_USER_TYPE_SUCCESS_ACTION
  | actions.ON_UPDATE_USER_TYPE_FAIL_ACTION
  | actions.SELECT_USER_TYPE_ACTION;

export function userTypesReducer(
  state: userTypesState = userTypesInitialState,
  action: Action
): userTypesState {
  switch (action.type) {
    case types.ON_VIEW_USER_TYPES: {
      return {
        ...state
      };
    }
    case types.ON_VIEW_USER_TYPES_SUCCESS: {
      return {
        ...state,
        userTypes: action.payload
      };
    }
    case types.ON_VIEW_USER_TYPES_FAIL: {
      return {
        ...state
      };
    }

    case types.ON_ADD_USER_TYPE_ACTION: {
      return {
        ...state,
        loading: true
      };
    }
    case types.ON_ADD_USER_TYPE_SUCCESS_ACTION: {
      return {
        ...state,
        userTypes: action.payload
      };
    }
    case types.ON_ADD_USER_TYPE_FAIL_ACTION: {
      return {
        ...state
      };
    }

    //////////////////////
    case types.ON_ACTIVATE_USER_TYPE_ACTION: {
      return {
        ...state,
        loading: true
      };
    }
    case types.ON_ACTIVATE_USER_TYPE_SUCCESS_ACTION: {
      return {
        ...state,
        userTypes: action.payload
      };
    }
    case types.ON_ACTIVATE_USER_TYPE_FAIL_ACTION: {
      return {
        ...state
      };
    }
    /////////
    case types.ON_DEACTIVATE_USER_TYPE_ACTION: {
      return {
        ...state,
        loading: true
      };
    }
    case types.ON_DEACTIVATE_USER_TYPE_SUCCESS_ACTION: {
      return {
        ...state,
        userTypes: action.payload
      };
    }
    case types.ON_DEACTIVATE_USER_TYPE_FAIL_ACTION: {
      return {
        ...state
      };
    }
    ////////
    case types.ON_UPDATE_USER_TYPE_ACTION: {
      return {
        ...state,
        loading: true
      };
    }
    case types.ON_UPDATE_USER_TYPE_SUCCESS_ACTION: {
      return {
        ...state,
        userTypes: action.payload
      };
    }
    case types.ON_UPDATE_USER_TYPE_FAIL_ACTION: {
      return {
        ...state
      };
    }
    case types.SELECT_USER_TYPE: {
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
