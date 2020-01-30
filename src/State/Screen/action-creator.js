import { screensProxyService } from "../../proxy/services";
import * as types from "./actions";

export type ON_GET_ALL_SCREENS_Action = { type: string };
export type ON_GET_ALL_SCREENS_SUCCESS_Action = {
  type: string,
  payload: any
};
export type ON_GET_ALL_SCREENS_FAIL_Action = {
  type: string,
  payload: string
};

export async function tryGetApplicationportofolioAllScreensById(
  applicationPortofolioId
) {
  return async (dispatch, getState) => {
    dispatch(onGetAllScreens());
    const result = await screensProxyService.get(applicationPortofolioId);
    if (result.status === 200) {
      dispatch(getAllScreensSuccess(result.data));
    } else {
      dispatch(getAllScreensFail());
    }
  };
}
export function onGetAllScreens(): ON_GET_ALL_SCREENS_Action {
  return { type: types.ON_GET_ALL_SCREENS };
}

export function getAllScreensSuccess(token): ON_GET_ALL_SCREENS_SUCCESS_Action {
  return { type: types.ON_GET_ALL_SCREENS_SUCCESS, payload: token };
}

export function getAllScreensFail(): ON_GET_ALL_SCREENS_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.ON_GET_ALL_SCREENS_FAIL, payload: errorMsg };
}
