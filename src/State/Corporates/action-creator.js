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

export type ON_VIEW_APPLICATION_ACTION = { type: String };
export type ON_VIEW_APPLICATION_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_APPLICATION_FAIL_ACTION = { type: String, payload: any };

export type ON_ADD_APPLICATION_ACTION = { type: String, payload: any };
export type ON_ADD_APPLICATION_SUCCESS_ACTION = { type: String, payload: any };
export type ON_ADD_APPLICATION_FAIL_ACTION = { type: String, payload: any };

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
  };
}

export function onAddCompanySuccess(
  companies: CompaniesModel
): ON_ADD_COMPANY_SUCCESS_ACTION {
  return { type: types.ON_ADD_COMPANY_SUCCESS_ACTION, payload: companies };
}

export function onAddCompanyFail(): ON_ADD_COMPANY_FAIL_ACTION {
  return {
    type: types.ON_ADD_COMPANY_FAIL_ACTION,
    payload: "connection error"
  };
}

/////////////////////////////////

export async function onDeactivateCorporate(id) {
  console.log(id, "we are here");
  return async (dispatch, getState) => {
    let state = getState();

    let response = await corporateService.deactivate(id);

    if (response.status === 200) {
      let companies = state.companies.companies;
      const toEditIndex = companies.findIndex(
        comp => comp.id === response.data
      );

      companies = [...state.companies.companies]; // important to create a copy, otherwise you'll modify state outside of setState call
      companies[toEditIndex].isActive = !companies[toEditIndex].isActive;
      // console.log(companies, "companies");
      dispatch(onDeactivateCorporateSuccess(companies));
    } else {
      console.log("failed");
      console.log(response.statusText);
      dispatch(onDeactivateCorporateFail());
    }
    // companies.push(values);
  };
}

export function onDeactivateCorporateSuccess(
  companies: CompaniesModel
): ON_DEACTIVATE_COMPANY_SUCCESS_ACTION {
  return {
    type: types.ON_DEACTIVATE_COMPANY_SUCCESS_ACTION,
    payload: companies
  };
}

export function onDeactivateCorporateFail(): ON_DEACTIVATE_COMPANY_FAIL_ACTION {
  return {
    type: types.ON_DEACTIVATE_COMPANY_FAIL_ACTION,
    payload: "connection error"
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
//////
export function onViewApplicationsSuccess(
  applications: any
): ON_VIEW_APPLICATION_SUCCESS_ACTION {
  return {
    type: types.ON_VIEW_SUCCESS_APPLICATIONS_BY_CORPORATE_ID,
    payload: applications
  };
}

export function onViewApplicationsFail(): ON_VIEW_APPLICATION_FAIL_ACTION {
  return {
    type: types.ON_VIEW_SUCCESS_APPLICATIONS_BY_CORPORATE_ID,
    payload: "Faild to load All application"
  };
}

export function onAddApplication(application: any): ON_ADD_APPLICATION_ACTION {
  return { type: types.ON_ADD_Application_ACTION, payload: application };
}

export function onAddApplicationSuccess(): ON_ADD_APPLICATION_SUCCESS_ACTION {
  const success = "Application  Added Successfuly";
  return { type: types.ON_ADD_Application_ACTION, payload: success };
}
export function onAddApplicationFail(): ON_ADD_APPLICATION_FAIL_ACTION {
  const errorMessage = "Faild To add";
  return { type: types.ON_ADD_Application_ACTION, payload: errorMessage };
}
