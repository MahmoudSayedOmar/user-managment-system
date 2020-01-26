import React from "react";
import { connect } from "react-redux";
import { State } from "../State/state";
import { Dispatch, bindActionCreators } from "redux";
import "../components/Login/login-component.css";
import { LoginComponent } from "../components/Login/login-component";
import { tryLogin } from "../State/Authorization/action-creator";

class LoginContainer extends React.Component {
  props: {
    isLoggedIn: boolean,
    loading: boolean,
    errorMessage: string,
    tryLogin: UserLoginModel => void
  };

  static mapStatetToProps(state: State) {
    return {
      loading: state.authorization.loading,
      errorMessage: state.authorization.errorMessage,
      isLoggedIn: state.authorization.isLoggedIn,
      authorization: state.authorization
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryLogin }, dispatch);
  }

  componentWillReceiveProps(nextProps) {
    console.log("obj", this.nextProps);
    debugger;
    if (nextProps.isLoggedIn === true) {
      // console.log(this.props);
      // debugger;
      // this.props.cookies.set("authorization", this.props.authorization, {
      //   path: "/"
      // });
      // debugger;
      // var x = this.props.cookies.get("authorization");
      // console.log("cookies", this.props);
      // console.log("auth", x);
      // debugger;
      // this.props.cookies.remove("authorization", { path: "/" });
      // console.log("cookies", this.props.cookies);
      // debugger;
      console.log("history", nextProps.history);
      debugger;
      nextProps.history.push("/admin/user-page");
    }
  }
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div className="logo">
            <img
              alt="Medaf"
              src="./images/logo.png"
              style={{ width: "50%" }}
              className="img-responsive"
            />
          </div>
          {this.props.loading ? (
            "loading..."
          ) : (
            <LoginComponent
              tryLogin={this.props.tryLogin}
              errorMessage={this.props.errorMessage}
            />
          )}
        </div>
      </div>
    );
  }
}

export const LoginScreen = connect(
  LoginContainer.mapStatetToProps,
  LoginContainer.mapDispatchToProps
)(LoginContainer);
