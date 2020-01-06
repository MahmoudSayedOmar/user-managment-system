import * as types from "./actions";
import { corporateService } from "../../proxy/services";

export type ON_VIEW_COMPANIES_ACTION = { type: String };
export type ON_VIEW_COMPANIES_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_COMPANIES_FAIL_ACTION = { type: String, payload: any };

export type ON_ADD_COMPANY_ACTION = { type: String };
export type ON_ADD_COMPANY_SUCCESS_ACTION = { type: String, payload: any };
export type ON_ADD_COMPANY_FAIL_ACTION = { type: String, payload: any };

export type ON_DEACTIVATE_COMPANY_ACTION = { type: String };
export type ON_DEACTIVATE_COMPANY_SUCCESS_ACTION = {
  type: String,
  payload: any
};
export type ON_DEACTIVATE_COMPANY_FAIL_ACTION = { type: String, payload: any };

export type ON_UPDATE_COMPANY_ACTION = { type: String };
export type ON_UPDATE_COMPANY_SUCCESS_ACTION = { type: String, payload: any };
export type ON_UPDATE_COMPANY_FAIL_ACTION = { type: String, payload: any };

export async function onViewCompanies(): ON_VIEW_COMPANIES_ACTION {
  return async dispatch => {
    var json = await corporateService.get();
    if (json.status === 200) {
      console.log(json.data);
      dispatch(onViewCompaniesSuccess(json.data));
    } else {
      dispatch(onViewCompaniesFail());
    }
    // console.log(json)
  };
}
export function onViewCompaniesSuccess(
  companies: CompaniesModel
): ON_VIEW_COMPANIES_SUCCESS_ACTION {
  return { type: types.ON_VIEW_COMPANIES_SUCCESS, payload: companies };
}
export function onViewCompaniesFail(): ON_VIEW_COMPANIES_FAIL_ACTION {
  return {
    type: types.ON_VIEW_COMPANIES_FAIL,
    payload: "connection error"
  };
}
///////////////
export async function onAddCorporate(values) {
  return async (dispatch, getState) => {
    let state = getState();
    let companies = state.companies.companies;
    let response = await corporateService.add(values);
    if (response.status === 200) {
      companies.push(response.data);
      dispatch(onAddCompanySuccess(companies));
    } else {
      console.log(response.statusText);
      dispatch(onAddCompanyFail());
    }
    // companies.push(values);
  };
}

export function onAddCompanySuccess(
  companies: CompaniesModel
): ON_ADD_COMPANY_SUCCESS_ACTION {
  return { type: types.ON_ADD_COMPANY_SUCCESS, payload: companies };
}

export function onAddCompanyFail(): ON_ADD_COMPANY_FAIL_ACTION {
  return {
    type: types.ON_ADD_COMPANY_FAIL,
    payload: "connection error"
  };
}

/////////////////////////////////

export async function onDeactivateCorporate(id) {
  console.log(id, "we are here");
  return async (dispatch, getState) => {
    // let state = getState();
    // let companies = state.companies.companies;
    let response = await corporateService.deactivate(id);
    console.log(response, "response");
    debugger;
    if (response.status === 200) {
      console.log("connected successfully");
      // companies.push(response.data);
      // dispatch(onAddCompanySuccess(companies));
    } else {
      console.log("failed");
      console.log(response.statusText);
      dispatch(onAddCompanyFail());
    }
    // companies.push(values);
  };
}

/////////////////////////////
export async function onUpdateCorporate(values) {
  console.log(values, "values");
  return async (dispatch, getState) => {
    let state = getState();
    let companies = state.companies.companies;
    let response = await corporateService.update(values);
    console.log(response, "respnose");
    if (response.status === 200) {
      // companies.push(response.data);
      dispatch(onUpdateCompanySuccess(companies));
    } else {
      console.log(response.statusText);
      dispatch(onUpdateCompnayFail());
    }
    // companies.push(values);
  };
}
////////////////////////////
// export async function onUpdateCorporate(values) {
//   return async (dispatch, getState) => {
//     let state = getState();
//     let companies = state.companies.companies;
//     const toEditIndex = companies.findIndex(comp => comp.id === values.id);

//     companies = [...state.companies.companies]; // important to create a copy, otherwise you'll modify state outside of setState call
//     companies[toEditIndex] = values;

//     dispatch(onUpdateCompanySuccess(companies));
//   };
// }
export function onUpdateCompanySuccess(
  companies: CompaniesModel
): ON_UPDATE_COMPANY_SUCCESS_ACTION {
  return { type: types.ON_UPDATE_COMPANY_SUCCESS_ACTION, payload: companies };
}
export function onUpdateCompnayFail(): ON_UPDATE_COMPANY_FAIL_ACTION {
  return {
    type: types.ON_UPDATE_COMPANY_FAIL_ACTION,
    payload: "connection error"
  };
}
