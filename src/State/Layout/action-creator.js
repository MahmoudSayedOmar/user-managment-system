import * as types from "./actions";

export type ON_VIEW_COMPANIES_ACTION = { type: String };
export type ON_VIEW_COMPANIES_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_COMPANIES_FAIL_ACTION = { type: String, payload: any };

export async function onShowCompanies() {
  return async dispatch => {
    //dispatch(onViewCompaniesSuccess());
  };
}

export function onViewCompanies(): ON_VIEW_COMPANIES_ACTION {
  return { type: types.ON_VIEW_COMPANIES };
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
