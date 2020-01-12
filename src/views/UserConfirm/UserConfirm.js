import React from "react";
// react plugin used to create charts
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import queryString from "query-string";
// core components
import "./UserConfirm.css";

class UserConfirm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.form.resetFields();
      }
    });
  };
  componentDidMount() {
    console.log(this.props.location.search, "props");
    const urlVariables = queryString.parse(this.props.location.search);
    console.log(urlVariables.email);

    if (urlVariables.email !== "") {
      console.log("haha");
      this.props.form.setFieldsValue({
        email: urlVariables.email
      });
    }
  }
  render() {
    // if (this.props.params.email) {
    //   console.log(this.props.params.email);
    // }
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
              <h3>Mail Confirmation</h3>

              <Form.Item>{getFieldDecorator("email", {})(<Input />)}</Form.Item>

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
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}
let UserForm = Form.create()(UserConfirm);
export const UserConfirmScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
