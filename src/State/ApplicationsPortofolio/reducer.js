import {
  applicationsPortofoliosInitialState,
  applicationsPortofoliosState
} from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_ACTION
  | actions.ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_FAIL_ACTION
  | actions.ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_SUCCESS_ACTION
  | actions.ON_ADD_APPLICATIONPORTOFOLIO_ACTION
  | actions.ON_ADD_APPLICATIONPORTOFOLIO_FAIL_ACTION
  | actions.ON_ADD_APPLICATIONPORTOFOLIO_SUCCESS_ACTION
  | actions.ON_CHANGE_ACTIVATION_STATUS_ACTION
  | actions.ON_CHANGE_ACTIVATION_STATUS_SUCCESS_ACTION
  | actions.ON_CHANGE_ACTIVATION_STATUS_FAIL_ACTION;

export function applicationsPortofoliosReducer(
  state: applicationsPortofoliosState = applicationsPortofoliosInitialState,
  action: Action
): applicationsPortofoliosState {
  switch (action.type) {
    case types.ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID: {
      return {
        ...state,
        isLoaded: false
      };
    }
    case types.ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_SUCCESS: {
      return {
        ...state,
        applicationsPortofolios: action.payload,
        isLoaded: true
      };
    }
    case types.ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_FAIL: {
      return {
        ...state
      };
    }
    case types.ON_ADD_APPLICATIONPORTOFOLIO: {
      return {
        ...state
      };
    }
    case types.ON_CHANGE_ACTIVATION_STATUS_SUCCESS:
    case types.ON_ADD_APPLICATIONPORTOFOLIO_SUCCESS: {
      console.log(action.payload);

      return {
        ...state,
        applicationsPortofolios: action.payload
      };
    }
    case types.ON_ADD_APPLICATIONPORTOFOLIO_FAIL: {
      return {
        ...state
      };
    }
    case types.ON_CHANGE_ACTIVATION_STATUS: {
      return {
        ...state
      };
    }

    case types.ON_CHANGE_ACTIVATION_STATUS_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
