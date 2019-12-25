import * as types from "./actions";

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
export function onViewCompanies(): ON_VIEW_COMPANIES_ACTION {
  return { type: types.ON_VIEW_COMPANIES };
}

export async function onAddCorporate(values) {
  console.log(values, "we reached here");

  return async (dispatch, getState) => {
    let state = getState();
    let companies = state.companies.companies;
    companies.push(values);
    console.log(companies, "allcompnaies");
    dispatch(onAddCompnaySuccess(companies));
  };
}
export async function onUpdateCorporate(values) {
  console.log(values, "we reached here");
  // will send to the services here, suppose to
  return async (dispatch, getState) => {
    let state = getState();
    let companies = state.companies.companies;
    const toEditIndex = companies.findIndex(comp => comp.key === values.key);

    companies = [...state.companies.companies]; // important to create a copy, otherwise you'll modify state outside of setState call
    companies[toEditIndex] = values;
    // this.setState({ employees });
    console.log(companies, "new companies");
    // companies.push(values);

    dispatch(onUpdateCompnaySuccess(companies));
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

///////////////////////////
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
///////////////////////////
export function onUpdateompany(): ON_UPDATE_COMPANY_ACTION {
  return { type: types.ON_UPDATE_COMPANY_ACTION };
}
export function onUpdateCompnaySuccess(
  companies: CompaniesModel
): ON_UPDATE_COMPANY_SUCCESS_ACTION {
  return { type: types.ON_UPDATE_COMPANY_SUCCESS, payload: companies };
}

export function onUpdateCompnayFail(): ON_UPDATE_COMPANY_FAIL_ACTION {
  return {
    type: types.ON_UPDATE_COMPANY_FAIL,
    payload: "connection error"
  };
}
