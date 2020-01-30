import React from "react";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { LoginScreen } from "./views/login-screen";
import { UserConfirmScreen } from "./views/UserConfirm/UserConfirm";
import AdminLayout from "layouts/Admin.jsx";
import requireAuth from "./views/AuthenticatedComponent";

import "antd/dist/antd.css";

import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class App extends React.Component {
  // static propTypes = {
  //   cookies: instanceOf(Cookies).isRequired
  // };

  constructor(props) {
    super(props);
  }

  render() {
    // debugger;

    return (
      <div>
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <Route path="/userConfirm" component={UserConfirmScreen} />
          <Route
            path="/admin"
            render={requireAuth(props => (
              <AdminLayout {...props} />
            ))}
          />
          <Route
            path="/"
            render={() => (
              <LoginScreen
                {...this.props}
                // cookies={this.props.cookies}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

//export default withRouter(withCookies(App));
export default withRouter(App);
