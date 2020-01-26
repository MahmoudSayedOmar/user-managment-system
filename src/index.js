import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import { combinedReducer } from "./State/reducer";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";

import "antd/dist/antd.css";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { PersistGate } from "redux-persist/integration/react";

//import { CookiesProvider } from "react-cookie";
import App from "./App";

const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["authorization"]
};
const persistedReducer = persistReducer(persistConfig, combinedReducer);
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware))
);
const persistor = persistStore(store);

ReactDOM.render(
  // <CookiesProvider>
  <Provider store={store}>
    <Router history={history}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  // </CookiesProvider>
  document.getElementById("root")
);
