import React from "react";
// react plugin used to create charts

import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

// core components
import "./UserConfirm.css";

class UserConfirm extends React.Component {
  render() {
    return (
      <>
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
            <form
              onSubmit={() => {
                this.props.tryLogin(this.state);
              }}
            >
              <h3>Mail Confirmation</h3>

              <div className="form-group">
                <input
                  name="userName"
                  type="hidden"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <input
                  name="confirmation"
                  type="email"
                  className="form-control"
                  placeholder="confirm code"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <p className="forgot-password text-right">
                Resend <a href="/">code?</a>
              </p>
            </form>
          </div>
        </div>{" "}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}

export const UserConfirmScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserConfirm);
