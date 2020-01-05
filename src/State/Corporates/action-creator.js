import * as types from "./actions";
import { corporateService } from "../../proxy/services";

export type ON_VIEW_COMPANIES_ACTION = { type: String };
export type ON_VIEW_COMPANIES_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_COMPANIES_FAIL_ACTION = { type: String, payload: any };

export type ON_ADD_COMPANY_ACTION = { type: String };
export type ON_ADD_COMPANY_SUCCESS_ACTION = { type: String, payload: any };
export type ON_ADD_COMPANY_FAIL_ACTION = { type: String, payload: any };

export type ON_UPDATE_COMPANY_ACTION = { type: String };
export type ON_UPDATE_COMPANY_SUCCESS_ACTION = { type: String, payload: any };
export type ON_UPDATE_COMPANY_FAIL_ACTION = { type: String, payload: any };

// export async function onShowCompanies() {
//   return async dispatch => {
//     //dispatch(onViewCompaniesSuccess());
//   };
// }

export async function onAddCorporate(values) {
  return async (dispatch, getState) => {
    let state = getState();
    let companies = state.companies.companies;
    let response = await corporateService.add(values);
    if (response.status === 200) {
      companies.push(response.data);
      dispatch(onAddCompnaySuccess(companies));
    } else {
      console.log(response.statusText);
      dispatch(onAddCompnayFail());
    }
    // companies.push(values);
  };
}
export async function onUpdateCorporate(values) {
  return async (dispatch, getState) => {
    let state = getState();
    let companies = state.companies.companies;
    const toEditIndex = companies.findIndex(comp => comp.id === values.id);

    companies = [...state.companies.companies]; // important to create a copy, otherwise you'll modify state outside of setState call
    companies[toEditIndex] = values;

    dispatch(onUpdateCompnaySuccess(companies));
  };
}
/////////////////////////------------------------------------
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
///////////////////////////--------------------------------

export function onAddCompany(): ON_ADD_COMPANY_ACTION {
  return { type: types.ON_ADD_COMPANY_ACTION };
}
export function onAddCompnaySuccess(
  companies: CompaniesModel
): ON_ADD_COMPANY_SUCCESS_ACTION {
  return { type: types.ON_ADD_COMPANY_SUCCESS, payload: companies };
}

export function onAddCompnayFail(): ON_ADD_COMPANY_FAIL_ACTION {
  return {
    type: types.ON_ADD_COMPANY_FAIL,
    payload: "connection error"
  };
}
///////////////////////////--------------------------------

export function onUpdateompany(): ON_UPDATE_COMPANY_ACTION {
  return { type: types.ON_UPDATE_COMPANY_ACTION };
}
export function onUpdateCompnaySuccess(
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
