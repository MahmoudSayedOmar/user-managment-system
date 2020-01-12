import React from "react";

export class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handelChange = this.handelChange.bind(this);
  }
  handelChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.tryLogin(this.state);
        }}
      >
        <h3>Sign In</h3>
        <center>
          <h6 style={{ color: "red" }}>{this.props.errorMessage}</h6>
        </center>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="username"
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.username}
            onChange={this.handelChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handelChange}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="/">password?</a>
        </p>
      </form>
    );
  }
}
