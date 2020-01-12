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

/////////////

export type ON_ACTIVATE_COMPANY_ACTION = { type: String };
export type ON_ACTIVATE_COMPANY_SUCCESS_ACTION = {
  type: String,
  payload: any
};
export type ON_ACTIVATE_COMPANY_FAIL_ACTION = { type: String, payload: any };

export type ON_UPDATE_COMPANY_ACTION = { type: String };
export type ON_UPDATE_COMPANY_SUCCESS_ACTION = { type: String, payload: any };
export type ON_UPDATE_COMPANY_FAIL_ACTION = { type: String, payload: any };

export async function onViewCompanies(): ON_VIEW_COMPANIES_ACTION {
  return async (dispatch, getState) => {
    console.log(getState());
    var json = await corporateService.get();
    if (json.status === 200) {
      dispatch(onViewCompaniesSuccess(json.data));
    } else {
      dispatch(onViewCompaniesFail());
    }
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
    dispatch({ type: types.ON_ADD_COMPANY_ACTION });
    let response = await corporateService.add(values);
    if (response.status === 200) {
      response.data.registerationNo = response.data.registratioNo;
      companies.push(response.data);
      dispatch(onAddCompanySuccess(companies));
    } else {
      dispatch(onAddCompanyFail());
    }
    // companies.push(values);
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

export async function onActivateCorporate(id) {
  return async (dispatch, getState) => {
    let state = getState();

    let response = await corporateService.activate(id);

    if (response.status === 200) {
      let companies = state.companies.companies;
      const toEditIndex = companies.findIndex(
        comp => comp.id === response.data
      );

      companies = [...state.companies.companies]; // important to create a copy, otherwise you'll modify state outside of setState call
      companies[toEditIndex].isActive = !companies[toEditIndex].isActive;

      dispatch(onActivateCorporateSuccess(companies));
    } else {
      dispatch(onActivateCorporateFail());
    }
    // companies.push(values);
  };
}

export function onActivateCorporateSuccess(
  companies: CompaniesModel
): ON_ACTIVATE_COMPANY_SUCCESS_ACTION {
  return {
    type: types.ON_ACTIVATE_COMPANY_SUCCESS_ACTION,
    payload: companies
  };
}

export function onActivateCorporateFail(): ON_ACTIVATE_COMPANY_FAIL_ACTION {
  return {
    type: types.ON_ACTIVATE_COMPANY_FAIL_ACTION,
    payload: "connection error"
  };
}

/////////////////////////////////
export async function onDeactivateCorporate(id) {
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

      dispatch(onDeactivateCorporateSuccess(companies));
    } else {
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
  return async (dispatch, getState) => {
    let state = getState();
    let companies = state.companies.companies;

    let response = await corporateService.update(values);

    if (response.status === 200) {
      response.data.registerationNo = response.data.registratioNo;
      let companies = state.companies.companies;
      const toEditIndex = companies.findIndex(
        comp => comp.id === response.data.id
      );
      companies = [...state.companies.companies]; // important to create a copy, otherwise you'll modify state outside of setState call
      companies[toEditIndex] = response.data;
      dispatch(onUpdateCompanySuccess(companies));
    } else {
      dispatch(onUpdateCompnayFail());
    }
    // companies.push(values);
  };
}

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
