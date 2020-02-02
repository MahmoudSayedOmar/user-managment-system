import * as types from "./actions";
import { menusProxyService } from "../../proxy/services";

export type ON_VIEW_MENUS_ACTION = { type: String };
export type ON_VIEW_MENUS_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_MENUS_FAIL_ACTION = { type: String, payload: any };

export async function tryViewMenus(value) {
  return async (dispatch, getState) => {
    var json = await menusProxyService.getMenus(value);
    if (json.status === 200) {
      // debugger;
      dispatch(onViewMenusSuccess(json.data));
      console.log("Mahmoud", getState(json.data));
    } else {
      dispatch(onViewMenusFail());
    }
  };
}

export function onViewMenus(): ON_VIEW_MENUS_ACTION {
  return { type: types.ON_VIEW_MENU };
}

export function onViewMenusSuccess(menus): ON_VIEW_MENUS_SUCCESS_ACTION {
  return { type: types.ON_VIEW_MENU_SUCCESS, payload: menus };
}

export function onViewMenusFail(): ON_VIEW_MENUS_FAIL_ACTION {
  return {
    type: types.ON_VIEW_MENU_FAIL,
    payload: "connection error"
  };
}
/********************************************* */

export type ON_ADD_MENU_ACTION = { type: String };
export type ON_ADD_MENU_SUCCESS_ACTION = { type: String, payload: any };
export type ON_ADD_MENU_FAIL_ACTION = { type: String, payload: any };

export async function onAddMenu(applicationportofolioId, values) {
  return async (dispatch, getState) => {
    let state = getState();
    let menus = state.menus.menus;
    dispatch({ type: types.ON_ADD_MENU });
    let response = await menusProxyService.addMenu(
      applicationportofolioId,
      values
    );
    // debugger;
    if (response.status === 200) {
      menus.push(response.data);
      dispatch(onAddMenuSuccess(menus));
    } else {
      dispatch(onAddMenuFail());
    }
  };
}

export function onAddMenuSuccess(menu): ON_ADD_MENU_SUCCESS_ACTION {
  return { type: types.ON_ADD_MENU_SUCCESS, payload: menu };
}

export function onAddMenuFail(): ON_ADD_MENU_FAIL_ACTION {
  return {
    type: types.ON_ADD_MENU_FAIL,
    payload: "connection error"
  };
}
/********************************************* */
export type ON_CHANGE_ACTIVATION_STATUS_ACTION = { type: String };
export type ON_CHANGE_ACTIVATION_STATUS_SUCCESS_ACTION = {
  type: String,
  payload: Object
};
export type ON_CHANGE_ACTIVATION_STATUS_FAIL_ACTION = {
  type: String,
  payload: String
};

export async function changeMenuActivationStatus(menuId, newStatus) {
  return async (dispatch, getState) => {
    dispatch(onChangeActivationStatus());
    // debugger;
    const response = await menusProxyService.changeMenuActivationStatus(
      menuId,
      newStatus
    );
    // debugger;
    if (response.status === 200) {
      dispatch(onChangeActivationStatusSuccess(response.data));
    } else {
      dispatch(onChangeActivationStatusFail());
    }
  };
}

export function onChangeActivationStatus(): ON_CHANGE_ACTIVATION_STATUS_ACTION {
  return {
    type: types.ON_CHANGE_ACTIVATION_STATUS
  };
}

export function onChangeActivationStatusSuccess(
  applications: any
): ON_CHANGE_ACTIVATION_STATUS_SUCCESS_ACTION {
  return {
    type: types.ON_CHANGE_ACTIVATION_STATUS_SUCCESS,
    payload: applications
  };
}

export function onChangeActivationStatusFail(): ON_CHANGE_ACTIVATION_STATUS_FAIL_ACTION {
  return {
    type: types.ON_CHANGE_ACTIVATION_STATUS_FAIL,
    payload: "Faild to Add application portofolio"
  };
}
/******************************************8 */
export type ON_MAP_MENU_TO_SCREENS = { type: String };
export type ON_MAP_MENU_TO_SCREENS_SUCCESS = {
  type: String,
  payload: Object
};
export type ON_MAP_MENU_TO_SCREENS_FAIL = { type: String };

export async function mapMenuToScreens(menuId, newScreensIds) {
  return async (dispatch, getState) => {
    dispatch(onMapScreensToMenu());
    // debugger;
    let state = getState();
    let menus = state.menus.menus;
    const response = await menusProxyService.mapMenusToScreens(
      menuId,
      newScreensIds
    );
    // debugger;
    if (response.status === 200) {
      menus = menus.map(menu => {
        if (menu.id == menuId) {
          menu.screensIds = newScreensIds;
        }
        return menu;
      });
      // debugger;
      dispatch(onMapScreensToMenuSuccess(menus));
    } else {
      dispatch(onMapScreensToMenuFail());
    }
  };
}

export function onMapScreensToMenu(): ON_MAP_MENU_TO_SCREENS {
  return {
    type: types.ON_MAP_MENU_TO_SCREENS
  };
}

export function onMapScreensToMenuSuccess(
  payload: any
): ON_MAP_MENU_TO_SCREENS_SUCCESS {
  return {
    type: types.ON_MAP_MENU_TO_SCREENS_SUCCESS,
    payload: payload
  };
}

export function onMapScreensToMenuFail(): ON_MAP_MENU_TO_SCREENS_FAIL {
  return {
    type: types.ON_MAP_MENU_TO_SCREENS_FAIL
  };
}
