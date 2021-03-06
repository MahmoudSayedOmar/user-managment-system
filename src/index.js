/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promiseMiddleware from "redux-promise";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {LoginScreen} from "./Screens/login-screen"
import AdminLayout from "layouts/Admin.jsx";
import { combinedReducer } from "./State/reducer";
import "antd/dist/antd.css";
const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware, thunkMiddleware))
);
const hist = createBrowserHistory();
//

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/login" component={LoginScreen} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        {/* <Redirect to="/admin/dashboard" /> */}
        <Redirect to="/admin/corporate/corporates" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
