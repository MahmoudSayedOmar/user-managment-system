import { UserLoginModel } from "../../proxy";
import { authProxyService } from "../../proxy/services";
import * as types from "./actions";

var jwtDecode = require("jwt-decode");

export type ON_LOGIN_Action = { type: string };
export type LOGIN_SUCCESS_Action = {
  type: string,
  payload: any
};
export type LOGIN_FAIL_Action = { type: string, payload: string };

export async function tryLogin(user: UserLoginModel) {
  return async (dispatch, getState) => {
    dispatch(onLogin(user));
    try {
      let response = await authProxyService.login(user);
      if (response.status === 200) {
        var result = response.data;
        var token = result["token"];
        var screens = result["screens"];
        var decodedToken = jwtDecode(token);
        var authState = Object.assign({}, getState().authorization, {
          token,
          isLoggedIn: true,
          loading: false,
          isRegistered: true,
          role: decodedToken["role"],
          screens
        });

        dispatch(loginSuccess(authState));
      } else {
        dispatch(loginFail());
      }
    } catch {
      dispatch(loginFail());
    }
  };
}
export function onLogin(user): ON_LOGIN_Action {
  return { type: types.ON_LOGIN, payload: user };
}

export function loginSuccess(token): LOGIN_SUCCESS_Action {
  return { type: types.LOGIN_SUCCESS, payload: token };
}

export function loginFail(): LOGIN_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.LOGIN_FAIL, payload: errorMsg };
}
//////////////////////////////////////////////////////////////////////

export type ON_VIEW_PROFILE_Action = { type: string };
export type VIEW_PROFILE_SUCCESS_Action = {
  type: string,
  payload: any
};
export type VIEW_PROFILE_FAIL_Action = { type: string, payload: string };

export async function tryViewProfile() {
  return async (dispatch, getState) => {
    // var user = getState().authorization.username;
    debugger;
    dispatch(onViewProfile());
    try {
      let response = await authProxyService.viewProfile(9);
      if (response.status === 200) {
        console.log(response.data);
        debugger;

        dispatch(profileViewingSuccess(response.data));
      } else {
        dispatch(profileViewingFail());
      }
    } catch {
      dispatch(profileViewingFail());
    }
  };
}
export function onViewProfile(): ON_LOGIN_Action {
  return { type: types.ON_VIEW_PROFILE };
}

export function profileViewingSuccess(token): LOGIN_SUCCESS_Action {
  return { type: types.VIEW_PROFILE_SUCCESS, payload: token };
}

export function profileViewingFail(): LOGIN_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.VIEW_PROFILE_FAIL, payload: errorMsg };
}
/********************************************* */
export type LOGOUT_ACTION = { type: string };

export async function tryLogOut() {
  return async dispatch => {
    dispatch(LogOut());
  };
}

export function LogOut(): LOGOUT_ACTION {
  return { type: types.LOGOUT };
}
