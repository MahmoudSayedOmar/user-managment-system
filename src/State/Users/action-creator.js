import * as types from "./actions";

export type ON_VIEW_USERS_ACTION = { type: String };
export type ON_VIEW_USERS_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_USERS_FAIL_ACTION = { type: String, payload: any };

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
