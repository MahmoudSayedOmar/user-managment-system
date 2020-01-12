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
  | actions.ON_ADD_APPLICATIONPORTOFOLIO_SUCCESS_ACTION;

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
    default:
      return state;
  }
}
