import { createAction } from "redux-actions";

export const toggleLang = createAction("TOGGLE_LANG");

export function initFunction(mainObject) {
  console.log(mainObject, "we are here");
  return dispatch => {
    dispatch(toggleLang(mainObject));
  };
}
