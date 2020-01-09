import * as types from "./actions";

import { authProxyService } from "../../proxy/services";

export type ON_VIEW_USERS_ACTION = { type: String };
export type ON_VIEW_USERS_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_USERS_FAIL_ACTION = { type: String, payload: any };

export type ON_ADD_USER_ACTION = { type: String };
export type ON_ADD_USER_SUCCESS_ACTION = { type: String, payload: any };
export type ON_ADD_USER_FAIL_ACTION = { type: String, payload: any };

export type ON_UPDATE_USER_ACTION = { type: String };
export type ON_UPDATE_USER_SUCCESS_ACTION = { type: String, payload: any };
export type ON_UPDATE_USER_FAIL_ACTION = { type: String, payload: any };

export function onViewUsers(): ON_VIEW_USERS_ACTION {
  return { type: types.ON_VIEW_USERS };
}
export function onViewUsersSuccess(
  users: UsersModel
): ON_VIEW_USERS_SUCCESS_ACTION {
  return { type: types.ON_VIEW_USERS_SUCCESS, payload: users };
}

export function onViewUSERSFail(): ON_VIEW_USERS_FAIL_ACTION {
  return {
    type: types.ON_VIEW_USERS_FAIL,
    payload: "connection error"
  };
}

export async function viewUsers() {
  return async (dispatch, getState) => {
    let state = getState();
    let users = state.users.users;
    let response = await authProxyService.getUsers();
    debugger;
    if (response.status === 200) {
      debugger;
      users.push(response.data);
      dispatch(onViewUsersSuccess(response.data));
    } else {
      console.log(response.statusText);
      dispatch(onViewUSERSFail());
    }
    // users.push(values);
  };
}

////////////////////////////////////
export async function onAddUser(values) {
  debugger;
  return async (dispatch, getState) => {
    let state = getState();
    let users = state.users.users;
    let response = await authProxyService.register(values);
    debugger;
    if (response.status === 200) {
      debugger;
      users.push(response.data);
      dispatch(onAddUserSuccess(users));
    }
    else {
      
      dispatch(onAddUserFail());
    }
    // users.push(values);
  };
}

export async function onEditUser(values) {
  console.log("valuesss", values);
  debugger;
  return async (dispatch, getState) => {
    // let state = getState();
    // let users = state.users.users;
    let response = await authProxyService.editUser(values);
    debugger;
    if (response.status === 200) {
      debugger;
      // users.push(response.data);
      dispatch(onUpdateUserSuccess(response.data));
    } else {
      console.log(response.statusText);
      dispatch(onUpdateUserFail());
    }
    // users.push(values);
  };
}

export function onAddUserSuccess(
  users: usersModel
): ON_ADD_USER_SUCCESS_ACTION {
  return { type: types.ON_ADD_USER_SUCCESS_ACTION, payload: users };
}

export function onAddUserFail(): ON_ADD_USER_FAIL_ACTION {
  return {
    type: types.ON_ADD_USER_FAIL_ACTION,
    payload: "connection error"
  };
}
/////////////////////
export async function onUpdateUser(values) {
  // will send to the services here, suppose to
  return async (dispatch, getState) => {
    let state = getState();
    let users = state.users.users;
    const toEditIndex = users.findIndex(user => user.id === values.id);

    users = [...state.users.users]; // important to create a copy, otherwise you'll modify state outside of setState call
    users[toEditIndex] = values;

    dispatch(onUpdateUserSuccess(users));
  };
}

export function onUpdateUserSuccess(
  users: usersModel
): ON_UPDATE_USER_SUCCESS_ACTION {
  return { type: types.ON_UPDATE_USER_SUCCESS_ACTION, payload: users };
}

export function onUpdateUserFail(): ON_UPDATE_USER_FAIL_ACTION {
  return {
    type: types.ON_ADD_USER_FAIL_ACTION,
    payload: "connection error"
  };
}
