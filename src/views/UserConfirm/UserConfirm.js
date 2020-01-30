import React from "react";
// react plugin used to create charts
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import queryString from "query-string";
// core components
import "./UserConfirm.css";
import { onSubmitCode } from "State/SubmitCode/action-creator";
class UserConfirm extends React.Component {
  state = {
    confirmDirty: false
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmitCode(values);
        this.props.form.resetFields();
      }
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.verified === true) {
      this.props.history.push("/login");
    }
  }
  componentDidMount() {
    const urlVariables = queryString.parse(this.props.location.search);

    if (urlVariables.email !== "") {
      // console.log("haha");
      this.props.form.setFieldsValue({
        email: urlVariables.email
      });
    }
  }
  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };
  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };
  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

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
            <Form onSubmit={this.handleSubmit}>
              <h3>Mail Verification</h3>

              <Form.Item style={{ display: "none" }}>
                {getFieldDecorator("email", {})(<Input type="hidden" />)}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator("code", {
                  rules: [
                    {
                      required: true,
                      message: "please enter Code",
                      whitespace: true
                    }
                  ]
                })(<Input placeholder="code" />)}
              </Form.Item>
              <Form.Item label="Password">
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your password!"
                    }
                  ]
                })(<Input.Password placeholder="Password" />)}
              </Form.Item>
              <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Please confirm your password!"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(
                  <Input.Password
                    onBlur={this.handleConfirmBlur}
                    placeholder="Confirm Password"
                  />
                )}
              </Form.Item>
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <p className="forgot-password text-right">
                Resend <a href="/">code?</a>
              </p>
            </Form>
          </div>
        </div>{" "}
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.submitCode, "submit state");
  return { verified: state.submitCode.verified };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ onSubmitCode }, dispatch);
}
let UserForm = Form.create()(UserConfirm);
export const UserConfirmScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
