import * as types from "./actions";
import { rolesProxyService } from "../../proxy/services";

export type ON_VIEW_ROLES_BY_USERTYPE_ID_ACTION = {
  type: String
};

export type ON_VIEW_ROLES_BY_USERTYPE_ID_FAIL_ACTION = {
  type: String,
  payload: any
};

export type ON_VIEW_ROLES_BY_USERTYPE_ID_SUCCESS_ACTION = {
  type: String,
  payload: any
};

///////////
export type ON_VIEW_ROLES_BY_USERTYPE_ARRAY_ACTION = {
  type: String
};

export type ON_VIEW_ROLES_BY_USERTYPE_ARRAY_FAIL_ACTION = {
  type: String,
  payload: any
};

export type ON_VIEW_ROLES_BY_USERTYPE_ARRAY_SUCCESS_ACTION = {
  type: String,
  payload: any
};
/////////////////////////////////

export async function viewRolesArray(userTypeArray) {
  return async (dispatch, getState) => {
    dispatch(onViewUserTypeRolesArray());
    var response = await rolesProxyService.getUserTypeRolesArray(userTypeArray);
    // console.log(response.data);
    // debugger;
    if (response.status === 200) {
      dispatch(onViewRolesArraySuccess(response.data));
      // console.log(getState());
      // debugger;
    } else {
      dispatch(onViewRolesArrayFail());
    }
  };
}

export function onViewRolesArraySuccess(
  roles: any
): ON_VIEW_ROLES_BY_USERTYPE_ARRAY_SUCCESS_ACTION {
  return {
    type: types.ON_VIEW_ROLES_BY_USERTYPE_ARRAY_SUCCESS,
    payload: roles
  };
}

export function onViewRolesArrayFail(): ON_VIEW_ROLES_BY_USERTYPE_ARRAT_FAIL_ACTION {
  return {
    type: types.ON_VIEW_ROLES_BY_USERTYPE_ARRAY_FAIL,
    payload: "Faild to load All roles"
  };
}
//////////////////////////////////////////
export async function viewRoles(userTypeId) {
  return async (dispatch, getState) => {
    dispatch(onViewUserTypeRoles());
    var response = await rolesProxyService.getUserTypeRoles(userTypeId);
    console.log(response.data);
    debugger;
    if (response.status === 200) {
      dispatch(onViewRolesSuccess(response.data));
      console.log(getState());
      debugger;
    } else {
      dispatch(onViewRolesFail());
    }
  };
}

export function onViewRolesSuccess(
  roles: any
): ON_VIEW_ROLES_BY_USERTYPE_ID_SUCCESS_ACTION {
  return {
    type: types.ON_VIEW_ROLES_BY_USERTYPE_ID_SUCCESS,
    payload: roles
  };
}

export function onViewRolesFail(): ON_VIEW_ROLES_BY_USERTYPE_ID_FAIL_ACTION {
  return {
    type: types.ON_VIEW_ROLES_BY_USERTYPE_ID_FAIL,
    payload: "Faild to load All roles"
  };
}
export function onViewUserTypeRoles(): ON_VIEW_ROLES_BY_USERTYPE_ID_ACTION {
  return {
    type: types.ON_VIEW_ROLES_BY_USERTYPE_ID
  };
}

export function onViewUserTypeRolesArray(): ON_VIEW_ROLES_BY_USERTYPE_ARRAY_ACTION {
  return {
    type: types.ON_VIEW_ROLES_BY_USERTYPE_ARRAY
  };
}

/***************************************/

export type ON_ADD_ROLE_ACTION = { type: String };
export type ON_ADD_ROLE_SUCCESS_ACTION = { type: String, payload: any };
export type ON_ADD_ROLE_FAIL_ACTION = { type: String, payload: any };

export async function addRole(userTypeId, role) {
  return async (dispatch, getState) => {
    dispatch(onAddRole());
    var response = await rolesProxyService.add(userTypeId, role);
    console.log(response.data);
    debugger;
    if (response.status === 200) {
      dispatch(onAddRoleSuccess(response.data));
      console.log(getState());
      debugger;
    } else {
      dispatch(onAddRoleFail());
    }
  };
}

export function onAddRole(): ON_ADD_ROLE_ACTION {
  return { type: types.ON_ADD_ROLE };
}

export function onAddRoleSuccess(role): ON_ADD_ROLE_SUCCESS_ACTION {
  return { type: types.ON_ADD_ROLE_SUCCESS, payload: role };
}

export function onAddRoleFail(): ON_ADD_ROLE_FAIL_ACTION {
  return {
    type: types.ON_ADD_ROLE_FAIL,
    payload: "connection error"
  };
}
