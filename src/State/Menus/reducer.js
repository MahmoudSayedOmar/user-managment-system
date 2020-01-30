import { menusInitialState, menusState } from "./state";
import * as actions from "./action-creator";
import * as types from "./actions";

type Action =
  | actions.ON_ADD_MENU_ACTION
  | actions.ON_ADD_MENU_SUCCESS_ACTION
  | actions.ON_ADD_MENU_FAIL_ACTION
  | actions.ON_VIEW_MENUS_ACTION
  | actions.ON_VIEW_MENUS_SUCCESS_ACTION
  | actions.ON_VIEW_MENUS_FAIL_ACTION
  | actions.ON_CHANGE_ACTIVATION_STATUS_ACTION
  | actions.ON_CHANGE_ACTIVATION_STATUS_SUCCESS_ACTION
  | actions.ON_CHANGE_ACTIVATION_STATUS_FAIL_ACTION
  | actions.ON_MAP_MENU_TO_SCREENS
  | actions.ON_MAP_MENU_TO_SCREENS_SUCCESS
  | actions.ON_MAP_MENU_TO_SCREENS_FAIL;
export function menusReducer(
  state: menusState = menusInitialState,
  action: Action
): menusState {
  switch (action.type) {
    case types.ON_VIEW_MENU: {
      return {
        ...state,
        isLoaded: false
      };
    }
    case types.ON_VIEW_MENU_SUCCESS: {
      return {
        ...state,
        menus: action.payload,
        isLoaded: true
      };
    }
    case types.ON_VIEW_MENU_FAIL: {
      return {
        ...state
      };
    }
    case types.ON_ADD_MENU: {
      return {
        ...state
      };
    }
    // case types.ON_CHANGE_ACTIVATION_STATUS_SUCCESS:
    case types.ON_ADD_MENU_SUCCESS: {
      console.log(action.payload);

      return {
        ...state,
        menus: action.payload
      };
    }
    case types.ON_ADD_MENU_FAIL: {
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
    case types.ON_MAP_MENU_TO_SCREENS_SUCCESS: {
      return {
        ...state,
        menus: action.payload
      };
    }
    default:
      return state;
  }
}
