import * as types from "./actions";




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
  
  export async function viewCorporateDetails(corporateId) {
    return async (dispatch, getState) => {
      dispatch(onViewApplicationsPortofolios())
      // let state = getState();
      // let companies = state.companies.companies;
      // if(companies===[]){
        const response = applicationsPortofoliosProxyService.getCorporateApplicationsPortofolios(corporateId);
  
        if (response.status === 200) { 
          console.log(response.data);
          //dispatch(onViewApplicationsPortofoliosSuccess());
        } else {
          dispatch(onViewApplicationsPortofoliosFail());
        }
      // }
      // else{
  
      // }   
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
  
  export async function addApplicationPortofolioToCorporate() {
    return async (dispatch, getState) => {
      
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
  