import { submitCodeProxyService } from "../../proxy/services";
import * as types from "./actions";

export type ON_SUBMIT_CODE_ACTION = { type: String };
export type ON_SUBMIT_CODE_SUCCESS_ACTION = { type: String, payload: any };
export type ON_SUBMIT_CODE_FAIL_ACTION = { type: String, payload: any };

export async function onSubmitCode(values): ON_SUBMIT_CODE_ACTION {
  console.log(values, "values");
  let valuesToSend = {
    username: values.email,
    code: values.code,
    password: values.password
  };

  return async (dispatch, getState) => {
    dispatch({ type: types.ON_SUBMIT_CODE_ACTION });
    try {
      let response = await submitCodeProxyService.activatecode(valuesToSend);
      console.log(response, "response");
      if (response.status === 200) {
        // console.log(response, "response");
        dispatch(onSubmitCodeSuccess());
      } else {
        console.log();
        dispatch(onSubmitCodeFail());
      }
    } catch (err) {
      console.log(err);
      dispatch(onSubmitCodeFail());
    }
    // companies.push(values);
  };
}

export function onSubmitCodeSuccess(submitCode): ON_SUBMIT_CODE_SUCCESS_ACTION {
  return { type: types.ON_SUBMIT_CODE_SUCCESS_ACTION, payload: submitCode };
}

export function onSubmitCodeFail(): ON_SUBMIT_CODE_FAIL_ACTION {
  const errorMsg = "Invalid Credentials";
  return { type: types.ON_SUBMIT_CODE_FAIL_ACTION, payload: errorMsg };
}
