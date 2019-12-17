import { handleActions } from "redux-actions";

import * as actions from "./actions.js";

const initialState = {
  articles: [],
  homeValue: null
};

const reducer = handleActions(
  {
    [actions.toggleLang]: (state, { payload }) => {
      return {
        ...state,
        homeValue: payload
      };
    }
  },
  initialState
);

export default reducer;
