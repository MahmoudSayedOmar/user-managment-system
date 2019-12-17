import { combineReducers } from "redux";

import layoutReducer from "./Layout/reducer";

export const combinedReducer = combineReducers({ layout: layoutReducer });
