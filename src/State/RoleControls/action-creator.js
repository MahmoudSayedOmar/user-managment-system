import * as types from './actions';

import { controlService} from "../../proxy/services"

export type ON_GET_ROLE_BY_ID_ACTION={
    type:String
};
 
export type ON_GET_ROLE_BY_ID_SUCCESS_ACTION={
    type:String,
    payload:any
};

export type ON_GET_ROLE_BY_ID_Fail_ACTION={
    type:String,
    payload:any
};

export async function onViewCompanies(): ON_GET_ROLE_BY_ID_ACTION {
    return async (dispatch, getState) => {
      // let state = getState();
      // debugger;
      var json = await controlService.getControlsByRole(1);
      if (json.status === 200) {
        dispatch(onViewRoleControlSuccess(json.data));
      } else {
        dispatch(onViewRoleControlFail("Faild To load data"));
      }
    };
  }


export function onViewRoleControlSuccess(data):ON_GET_ROLE_BY_ID_SUCCESS_ACTION{
    return {
      type: types.ON_GET_ROLE_BY_ID_SUCCESS,
      payload: data
    };
  }

  export function onViewRoleControlFail(erroMessage:String):ON_GET_ROLE_BY_ID_Fail_ACTION{
    return {
      type: types.ON_GET_ROLE_BY_ID_Fail,
      payload: erroMessage
    };
  }