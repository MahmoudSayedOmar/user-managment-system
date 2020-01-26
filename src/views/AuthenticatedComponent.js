import React from "react";
import { withRouter } from "react-router";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

//import * as Cookie from "js-cookie";
export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // auth: Cookie.get("auth")
      };
    }

    static mapStatetToProps(state) {
      return {
        isLoggedIn: state.authorization.isLoggedIn
      };
    }

    componentDidMount() {
      this.checkAuth();
    }
    checkAuth() {
      const location = this.props.location;
      debugger;
      console.log("thissssss props",this.props);
      // const redirect = location.pathname + location.search;
      if (!this.props.isLoggedIn) {
        this.props.history.push(`/login`);
      }
    }
    render() {
      return true ? <Component {...this.props} /> : null;
    }
  }
  return withRouter(
    connect(
      AuthenticatedComponent.mapStatetToProps,
      null
    )(AuthenticatedComponent)
  );
}
