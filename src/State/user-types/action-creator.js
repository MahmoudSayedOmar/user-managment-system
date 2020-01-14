import * as types from "./actions";
import { userTypesService } from "../../proxy/services";

export type ON_VIEW_USER_TYPES_ACTION = { type: String };
export type ON_VIEW_USER_TYPES_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_USER_TYPES_FAIL_ACTION = { type: String, payload: any };

export type ON_VIEW_USER_TYPES_ARRAY_ACTION = { type: String };
export type ON_VIEW_USER_TYPES_ARRAY_SUCCESS_ACTION = {
  type: String,
  payload: any
};
export type ON_VIEW_USER_TYPES_ARRAY_FAIL_ACTION = {
  type: String,
  payload: any
};

export type ON_ADD_USER_TYPE_ACTION = { type: String };
export type ON_ADD_USER_TYPE_SUCCESS_ACTION = { type: String, payload: any };
export type ON_ADD_USER_TYPE_FAIL_ACTION = { type: String, payload: any };

export type ON_DEACTIVATE_USER_TYPE_ACTION = { type: String };
export type ON_DEACTIVATE_USER_TYPE_SUCCESS_ACTION = {
  type: String,
  payload: any
};
export type ON_DEACTIVATE_USER_TYPE_FAIL_ACTION = {
  type: String,
  payload: any
};

/////////////

export type ON_ACTIVATE_USER_TYPE_ACTION = { type: String };
export type ON_ACTIVATE_USER_TYPE_SUCCESS_ACTION = {
  type: String,
  payload: any
};
export type ON_ACTIVATE_USER_TYPE_FAIL_ACTION = { type: String, payload: any };

export type ON_UPDATE_USER_TYPE_ACTION = { type: String };
export type ON_UPDATE_USER_TYPE_SUCCESS_ACTION = { type: String, payload: any };
export type ON_UPDATE_USER_TYPE_FAIL_ACTION = { type: String, payload: any };
////////////////Array ///////////////
export async function onViewUserTypesArray(
  appPortoflioId
): ON_VIEW_USER_TYPES_ARRAY_ACTION {
  return async dispatch => {
    var json = await userTypesService.getByArray(appPortoflioId);
    if (json.status === 200) {
      dispatch(onViewUserTypesArraySuccess(json.data));
    } else {
      dispatch(onViewUserTypesArrayFail());
    }
  };
}

export function onViewUserTypesArraySuccess(
  userTypes
): ON_VIEW_USER_TYPES_ARRAY_SUCCESS_ACTION {
  return { type: types.ON_VIEW_USER_TYPES_ARRAY_SUCCESS, payload: userTypes };
}

export function onViewUserTypesArrayFail(): ON_VIEW_USER_TYPES_ARRAY_FAIL_ACTION {
  return {
    type: types.ON_VIEW_USER_TYPES_ARRAY_FAIL,
    payload: "connection error"
  };
}
///////////////
export async function onViewUserTypes(
  appPortoflioId
): ON_VIEW_USER_TYPES_ACTION {
  return async dispatch => {
    var json = await userTypesService.get(appPortoflioId);
    if (json.status === 200) {
      dispatch(onViewUserTypesSuccess(json.data));
    } else {
      dispatch(onViewUserTypesFail());
    }
  };
}

export function onViewUserTypesSuccess(
  userTypes
): ON_VIEW_USER_TYPES_SUCCESS_ACTION {
  return { type: types.ON_VIEW_USER_TYPES_SUCCESS, payload: userTypes };
}

export function onViewUserTypesFail(): ON_VIEW_USER_TYPES_FAIL_ACTION {
  return {
    type: types.ON_VIEW_USER_TYPES_FAIL,
    payload: "connection error"
  };
}
///////////////
export async function onAddUserType(values, appPortoflioId) {
  return async (dispatch, getState) => {
    let state = getState();
    let userTypes = state.userTypes.userTypes;
    dispatch({ type: types.ON_ADD_USER_TYPE_ACTION });
    let response = await userTypesService.add(values, appPortoflioId);
    if (response.status === 200) {
      // response.data.registerationNo = response.data.registratioNo;
      userTypes.push(response.data);
      dispatch(onAddUserTypeSuccess(userTypes));
    } else {
      dispatch(onAddUserTypeFail());
    }
    // userTypes.push(values);
  };
}

export function onAddUserTypeSuccess(
  userType
): ON_ADD_USER_TYPE_SUCCESS_ACTION {
  return { type: types.ON_ADD_USER_TYPE_SUCCESS_ACTION, payload: userType };
}

export function onAddUserTypeFail(): ON_ADD_USER_TYPE_FAIL_ACTION {
  return {
    type: types.ON_ADD_USER_TYPE_FAIL_ACTION,
    payload: "connection error"
  };
}

/////////////////////////////////

export async function onActivateUserType(id) {
  return async (dispatch, getState) => {
    let state = getState();

    let response = await userTypesService.activate(id);

    if (response.status === 200) {
      let userTypes = state.userTypes.userTypes;
      const toEditIndex = userTypes.findIndex(
        uType => uType.id === response.data
      );

      userTypes = [...state.userTypes.userTypes]; // important to create a copy, otherwise you'll modify state outside of setState call
      userTypes[toEditIndex].isActive = !userTypes[toEditIndex].isActive;

      dispatch(onActivateUserTypeSuccess(userTypes));
    } else {
      dispatch(onActivateUserTypeFail());
    }
    // USER_TYPES.push(values);
  };
}

export function onActivateUserTypeSuccess(
  userTypes
): ON_ACTIVATE_USER_TYPE_SUCCESS_ACTION {
  return {
    type: types.ON_ACTIVATE_USER_TYPE_SUCCESS_ACTION,
    payload: userTypes
  };
}

export function onActivateUserTypeFail(): ON_ACTIVATE_USER_TYPE_FAIL_ACTION {
  return {
    type: types.ON_ACTIVATE_USER_TYPE_FAIL_ACTION,
    payload: "connection error"
  };
}

/////////////////////////////////
export async function onDeactivateUserType(id) {
  return async (dispatch, getState) => {
    let state = getState();

    let response = await userTypesService.deactivate(id);

    if (response.status === 200) {
      let USER_TYPES = state.USER_TYPES.USER_TYPES;
      const toEditIndex = USER_TYPES.findIndex(
        comp => comp.id === response.data
      );

      USER_TYPES = [...state.USER_TYPES.USER_TYPES]; // important to create a copy, otherwise you'll modify state outside of setState call
      USER_TYPES[toEditIndex].isActive = !USER_TYPES[toEditIndex].isActive;

      dispatch(onDeactivateUserTypeSuccess(USER_TYPES));
    } else {
      dispatch(onDeactivateUserTypeFail());
    }
    // USER_TYPES.push(values);
  };
}

export function onDeactivateUserTypeSuccess(
  USER_TYPES: USER_TYPESModel
): ON_DEACTIVATE_USER_TYPE_SUCCESS_ACTION {
  return {
    type: types.ON_DEACTIVATE_USER_TYPE_SUCCESS_ACTION,
    payload: USER_TYPES
  };
}

export function onDeactivateUserTypeFail(): ON_DEACTIVATE_USER_TYPE_FAIL_ACTION {
  return {
    type: types.ON_DEACTIVATE_USER_TYPE_FAIL_ACTION,
    payload: "connection error"
  };
}

/////////////////////////////
export async function onUpdateUserType(values) {
  return async (dispatch, getState) => {
    let state = getState();
    let USER_TYPES = state.USER_TYPES.USER_TYPES;

    let response = await userTypesService.update(values);

    if (response.status === 200) {
      response.data.registerationNo = response.data.registratioNo;
      let USER_TYPES = state.USER_TYPES.USER_TYPES;
      const toEditIndex = USER_TYPES.findIndex(
        comp => comp.id === response.data.id
      );
      USER_TYPES = [...state.USER_TYPES.USER_TYPES]; // important to create a copy, otherwise you'll modify state outside of setState call
      USER_TYPES[toEditIndex] = response.data;
      dispatch(onUpdateUserTypeSuccess(USER_TYPES));
    } else {
      dispatch(onUpdateUserTypeFail());
    }
    // USER_TYPES.push(values);
  };
}

export function onUpdateUserTypeSuccess(
  USER_TYPES: USER_TYPESModel
): ON_UPDATE_USER_TYPE_SUCCESS_ACTION {
  return {
    type: types.ON_UPDATE_USER_TYPE_SUCCESS_ACTION,
    payload: USER_TYPES
  };
}

export function onUpdateUserTypeFail(): ON_UPDATE_USER_TYPE_FAIL_ACTION {
  return {
    type: types.ON_UPDATE_USER_TYPE_FAIL_ACTION,
    payload: "connection error"
  };
}
