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
      isLoggedIn: state.authorization.isLoggedIn
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryLogin }, dispatch);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn === true) {
      this.props.location.push("/");
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
              <LoginComponent tryLogin={this.props.tryLogin} errorMessage={this.props.errorMessage} />
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
