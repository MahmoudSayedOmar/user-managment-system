import { defaultApplicationsProxyService } from "../../proxy/services";
import * as types from "./actions";

export type ON_GET_ALL_DEFAULTAPPLICATIONS_Action = { type: string };
export type ON_GET_ALL_DEFAULTAPPLICATIONS_SUCCESS_Action = {
  type: string,
  payload: any
};
export type ON_GET_ALL_DEFAULTAPPLICATIONS_FAIL_Action = {
  type: string,
  payload: string
};

export async function tryGetAllDefaultApplications() {
  return async (dispatch,getState) => {
    dispatch(onGetAllDefaultApplications());
    const result = await defaultApplicationsProxyService.getAll();
    debugger;
    if (result.status == 200) {
        console.log(result.data);
        debugger;
      dispatch(getAllDefaultApplicationsSuccess(result.data));
      console.log(getState());
    } else {
      dispatch(getAllDefaultApplicationsFail());
    }
  };
}
export function onGetAllDefaultApplications(): ON_GET_ALL_DEFAULTAPPLICATIONS_Action {
  return { type: types.ON_GET_ALL_DEFAULTAPPLICATIONS };
}

export function getAllDefaultApplicationsSuccess(
  token
): ON_GET_ALL_DEFAULTAPPLICATIONS_SUCCESS_Action {
  return { type: types.ON_GET_ALL_DEFAULTAPPLICATIONS_SUCCESS, payload: token };
}

export function getAllDefaultApplicationsFail(): ON_GET_ALL_DEFAULTAPPLICATIONS_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.ON_GET_ALL_DEFAULTAPPLICATIONS_FAIL, payload: errorMsg };
}
