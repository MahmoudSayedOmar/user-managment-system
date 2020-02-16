import * as types from "./actions";

import { applicationsPortofoliosProxyService } from "../../proxy/services";
import { applicationsPortofoliosInitialState } from "./state";

export type SELECT_COMPANY_ACTION = { type: String, payload: Number };

export type ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_ACTION = {
  type: String
};
export type ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_SUCCESS_ACTION = {
  type: String,
  payload: any
};
export type ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_FAIL_ACTION = {
  type: String,
  payload: any
};

export function SelectCorporate(corporateId): SELECT_COMPANY_ACTION {
  return {
    type: types.SELECT_COMPANY,
    payload: corporateId
  };
}

export function onViewApplicationsPortofolios(): ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_ACTION {
  return {
    type: types.ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID
  };
}

export function onViewApplicationsPortofoliosSuccess(
  applications: any
): ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_SUCCESS_ACTION {
  return {
    type: types.ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_SUCCESS,
    payload: applications
  };
}

export function onViewApplicationsPortofoliosFail(): ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_FAIL_ACTION {
  return {
    type: types.ON_VIEW_APPLICATIONPORTOFOLIO_BY_CORPORATE_ID_FAIL,
    payload: "Faild to load All application"
  };
}

export async function viewCorporateApplicationPortofilio(corporateId) {
  // debugger;
  return async (dispatch, getState) => {
    dispatch(SelectCorporate(corporateId));
    const response = await applicationsPortofoliosProxyService.getCorporateApplicationsPortofolios(
      corporateId
    );
    if (response.status === 200) {
      // debugger;
      // console.log(response.data, "data");
      dispatch(onViewApplicationsPortofoliosSuccess(response.data));
    } else {
      dispatch(onViewApplicationsPortofoliosFail());
    }
    dispatch(onViewApplicationsPortofolios());
  };
}

/***************************************/
export type ON_ADD_APPLICATIONPORTOFOLIO_ACTION = { type: String };
export type ON_ADD_APPLICATIONPORTOFOLIO_SUCCESS_ACTION = {
  type: String,
  payload: Array
};
export type ON_ADD_APPLICATIONPORTOFOLIO_FAIL_ACTION = {
  type: String,
  payload: String
};

export async function addApplicationPortofolioToCorporate(
  applicationPortofolio
) {
  return async (dispatch, getState) => {
    dispatch(onAddApplicationsPortofolios());
    const state = getState();
    var corporateId = state.companies.selectedCompanyId;

    const response = await applicationsPortofoliosProxyService.addApplicationPortofolioToCorporate(
      applicationPortofolio,
      corporateId
    );
    if (response.status === 200) {
      dispatch(onAddApplicationsPortofoliosSuccess(response.data));
    } else {
      dispatch(onAddApplicationsPortofoliosFail());
    }
  };
}

export function onAddApplicationsPortofolios(): ON_ADD_APPLICATIONPORTOFOLIO_ACTION {
  return {
    type: types.ON_ADD_APPLICATIONPORTOFOLIO
  };
}

export function onAddApplicationsPortofoliosSuccess(
  applications: any
): ON_ADD_APPLICATIONPORTOFOLIO_SUCCESS_ACTION {
  return {
    type: types.ON_ADD_APPLICATIONPORTOFOLIO_SUCCESS,
    payload: applications
  };
}

export function onAddApplicationsPortofoliosFail(): ON_ADD_APPLICATIONPORTOFOLIO_FAIL_ACTION {
  return {
    type: types.ON_ADD_APPLICATIONPORTOFOLIO_FAIL,
    payload: "Faild to Add application portofolio"
  };
}

/***************************************/
/////////////////////// EDIT IS HERE ///////////////////////
/***************************************/
export type ON_EDIT_APPLICATIONPORTOFOLIO_ACTION = { type: String };
export type ON_EDIT_APPLICATIONPORTOFOLIO_SUCCESS_ACTION = {
  type: String,
  payload: Array
};
export type ON_EDIT_APPLICATIONPORTOFOLIO_FAIL_ACTION = {
  type: String,
  payload: String
};

export async function editApplicationPortofolioToCorporate(
  applicationPortofolio
) {
  return async (dispatch, getState) => {
    dispatch(onEditApplicationsPortofolios());
    const state = getState();
    var corporateId = state.companies.selectedCompanyId;
    let ApplicationPortofoliosObject = {
      ...applicationPortofolio,
      CorporateId: corporateId
    };

    const response = await applicationsPortofoliosProxyService.editApplicationPortofolioToCorporate(
      ApplicationPortofoliosObject
    );
    // debugger;
    console.log(response, "response");
    if (response.status === 200) {
      // debugger;
      let appPortoto =
        state.applicationsPortofolios.applicationsPortofolios
          .applicationPortoflios;
      console.log(appPortoto, "appporot");
      const toEditIndex = appPortoto.findIndex(
        app => app.id === response.data.id
      );
      appPortoto = [
        ...state.applicationsPortofolios.applicationsPortofolios
          .applicationPortoflios
      ]; // important to create a copy, otherwise you'll modify state outside of setState call
      appPortoto[toEditIndex] = response.data;
      console.log(response.data, "response.data");
      console.log(appPortoto, "updated");
      dispatch(onEditApplicationsPortofoliosSuccess(appPortoto));
    } else {
      dispatch(onEditApplicationsPortofoliosFail());
    }
  };
}

export function onEditApplicationsPortofolios(): ON_EDIT_APPLICATIONPORTOFOLIO_ACTION {
  return {
    type: types.ON_EDIT_APPLICATIONPORTOFOLIO
  };
}

export function onEditApplicationsPortofoliosSuccess(
  applications: any
): ON_EDIT_APPLICATIONPORTOFOLIO_SUCCESS_ACTION {
  return {
    type: types.ON_EDIT_APPLICATIONPORTOFOLIO_SUCCESS,
    payload: applications
  };
}

export function onEditApplicationsPortofoliosFail(): ON_EDIT_APPLICATIONPORTOFOLIO_FAIL_ACTION {
  return {
    type: types.ON_EDIT_APPLICATIONPORTOFOLIO_FAIL,
    payload: "Faild to Add application portofolio"
  };
}

/***************************************/

export type ON_CHANGE_ACTIVATION_STATUS_ACTION = { type: String };
export type ON_CHANGE_ACTIVATION_STATUS_SUCCESS_ACTION = {
  type: String,
  payload: Object
};
export type ON_CHANGE_ACTIVATION_STATUS_FAIL_ACTION = {
  type: String,
  payload: String
};

export async function changeApplicationPortofolioActivationStatus(
  applicationPortofolioId,
  newStatus
) {
  return async (dispatch, getState) => {
    dispatch(onChangeActivationStatus());
    const response = await applicationsPortofoliosProxyService.changeApplicationPortofolioActivationStatus(
      applicationPortofolioId,
      newStatus
    );
    if (response.status === 200) {
      dispatch(onChangeActivationStatusSuccess(response.data));
    } else {
      dispatch(onChangeActivationStatusFail());
    }
  };
}

export function onChangeActivationStatus(): ON_CHANGE_ACTIVATION_STATUS_ACTION {
  return {
    type: types.ON_CHANGE_ACTIVATION_STATUS
  };
}

export function onChangeActivationStatusSuccess(
  applications: any
): ON_CHANGE_ACTIVATION_STATUS_SUCCESS_ACTION {
  return {
    type: types.ON_CHANGE_ACTIVATION_STATUS_SUCCESS,
    payload: applications
  };
}

export function onChangeActivationStatusFail(): ON_CHANGE_ACTIVATION_STATUS_FAIL_ACTION {
  return {
    type: types.ON_CHANGE_ACTIVATION_STATUS_FAIL,
    payload: "Faild to Add application portofolio"
  };
}

/********************************* */
export type SET_SELECTED_APPLICATIONPORTOFOLIOID_ACTION = {
  type: String,
  payload: Object
};
export function setApplicationPortofolioId(
  id
): SET_SELECTED_APPLICATIONPORTOFOLIOID_ACTION {
  return {
    type: types.SET_SELECTED_APPLICATIONPORTOFOLIOID,
    payload: id
  };
}
