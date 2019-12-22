import * as types from "./actions";

export type ON_VIEW_COMPANY_ACTION = { type: String };
export type ON_VIEW_COMPANY_SUCCESS_ACTION = { type: String, payload: any };
export type ON_VIEW_COMPANY_FAIL_ACTION = { type: String, payload: any };

export async function onShowCompnay(company: CompanyModel) {
  return async dispatch => {
    dispatch(onViewCompanySuccess(company));
  };
}

export function onViewCompany(): ON_VIEW_COMPANY_ACTION {
  return { type: types.ON_VIEW_COMPANY };
}

export function onViewCompanySuccess(
  company: CompanyModel
): ON_VIEW_COMPANY_SUCCESS_ACTION {
  return { type: types.ON_VIEW_COMPANY_SUCCESS, payload: company };
}

export function onViewCompanyFail(): ON_VIEW_COMPANY_FAIL_ACTION {
  return {
    type: types.ON_VIEW_COMPANY_FAIL,
    payload: "connection error"
  };
}
