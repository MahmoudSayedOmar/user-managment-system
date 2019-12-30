import * as types from "./actions";

export type ON_VIEW_USERS_ACTION = { type: String };
export type ON_VIEW_USERS_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_USERS_FAIL_ACTION = { type: String, payload: any };

export type ON_ADD_USER_ACTION = { type: String };
export type ON_ADD_USER_SUCCESS_ACTION = { type: String, payload: any };
export type ON_ADD_USER_FAIL_ACTION = { type: String, payload: any };

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
////////////////////////////////////

export async function onAddUser(values) {
  console.log(values, "we reached here");

  return async (dispatch, getState) => {
    let state = getState();
    let users = state.users.users;
    users.push(values);
    console.log(users, "allcompnaies");
    dispatch(onAddUserSuccess(users));
  };
}

export function onAddUserSuccess(
  users: usersModel
): ON_ADD_USER_SUCCESS_ACTION {
  return { type: types.ON_ADD_USER_SUCCESS, payload: users };
}

export function onAddUserFail(): ON_ADD_USER_FAIL_ACTION {
  return {
    type: types.ON_ADD_USER_FAIL,
    payload: "connection error"
  };
}
