import { modulesProxyService } from "../../proxy/services";
import * as types from "./actions";

export type ON_GET_ALL_MODULES_Action = { type: string };
export type ON_GET_ALL_MODULES_SUCCESS_Action = {
  type: string,
  payload: any
};
export type ON_GET_ALL_MODULES_FAIL_Action = {
  type: string,
  payload: string
};

export async function tryGetAllModules() {
  return async (dispatch, getState) => {
    dispatch(onGetAllModules());
    const result = await modulesProxyService.get();
    if (result.status === 200) {
      //console.log(result.data);
      dispatch(getAllModulesSuccess(result.data));
      //console.log(getState());
    } else {
      dispatch(getAllModulesFail());
    }
  };
}

export function onGetAllModules(): ON_GET_ALL_MODULES_Action {
  return { type: types.ON_GET_ALL_MODULES };
}

export function getAllModulesSuccess(token): ON_GET_ALL_MODULES_SUCCESS_Action {
  return { type: types.ON_GET_ALL_MODULES_SUCCESS, payload: token };
}

export function getAllModulesFail(): ON_GET_ALL_MODULES_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.ON_GET_ALL_MODULES_FAIL, payload: errorMsg };
}
