import { UserLoginModel } from "../../proxy";
import * as types from "./actions";

export type ON_LOGIN_Action = { type: string };
export type LOGIN_SUCCESS_Action = {
  type: string,
  payload: any
};
export type LOGIN_FAIL_Action = { type: string, payload: string };

export async function tryLogin(user: UserLoginModel) {
  return async dispatch => {
    dispatch(onLogin());
    if (true) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFail());
    }
  };
}
export function onLogin(): ON_LOGIN_Action {
  return { type: types.ON_LOGIN };
}

export function loginSuccess(token): LOGIN_SUCCESS_Action {
  return { type: types.LOGIN_SUCCESS, payload: token };
}

export function loginFail(): LOGIN_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.LOGIN_FAIL, payload: errorMsg };
}
