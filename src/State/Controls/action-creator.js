import { controlService } from "../../proxy/services";
import * as types from "./actions";

export type ON_GET_ROLE_CONTROLS_Action = { type: string };
export type ON_GET_ROLE_CONTROLS_SUCCESS_Action = {
  type: string,
  payload: any
};
export type ON_GET_ROLE_CONTROLS_FAIL_Action = {
  type: string,
  payload: string
};

export async function tryGetRoleControlsById(roleId) {
  return async (dispatch, getState) => {
    dispatch(onGetRoleControls());
    const applicationsPortofolioId = getState().applicationsPortofolios
      .selectedApplicationPortofolioId;
    debugger;
    const result = await controlService.getControlsByRole(
      roleId,
      applicationsPortofolioId
    );
    debugger;
    if (result.status === 200) {
      dispatch(getRoleControlsSuccess(result.data));
    } else {
      dispatch(getRoleControlsFail());
    }
  };
}
export function onGetRoleControls(): ON_GET_ROLE_CONTROLS_Action {
  return { type: types.ON_GET_ROLE_CONTROLS };
}

export function getRoleControlsSuccess(
  token
): ON_GET_ROLE_CONTROLS_SUCCESS_Action {
  return { type: types.ON_GET_ROLE_CONTROLS_SUCCESS, payload: token };
}

export function getRoleControlsFail(): ON_GET_ROLE_CONTROLS_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.ON_GET_ROLE_CONTROLS_FAIL, payload: errorMsg };
}
/******************************* */

export type ON_MAP_ROLE_TO_CONTROLS_Action = { type: string };
export type ON_MAP_ROLE_TO_CONTROLS_SUCCESS_Action = {
  type: string,
  payload: any
};
export type ON_MAP_ROLE_TO_CONTROLS_FAIL_Action = {
  type: string,
  payload: string
};

export async function tryMapRoleControlsById(roleId, controls) {
  return async (dispatch, getState) => {
    const result = await controlService.mapControlsByRole(roleId, controls);
    debugger;
    if (result.status === 200) {
      dispatch(mapRoleControlsSuccess());
    } else {
      dispatch(mapRoleControlsFail());
    }
  };
}
export function onMapRoleControls(): ON_MAP_ROLE_TO_CONTROLS_Action {
  return { type: types.ON_MAP_ROLE_TO_CONTROLS };
}

export function mapRoleControlsSuccess(
  token
): ON_MAP_ROLE_TO_CONTROLS_SUCCESS_Action {
  return { type: types.ON_MAP_ROLE_TO_CONTROLS_SUCCESS, payload: token };
}

export function mapRoleControlsFail(): ON_MAP_ROLE_TO_CONTROLS_FAIL_Action {
  const errorMsg = "Invalid Credentials";
  return { type: types.ON_MAP_ROLE_TO_CONTROLS_FAIL, payload: errorMsg };
}
