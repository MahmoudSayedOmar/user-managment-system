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
// react plugin used to create charts

// reactstrap components
import { Card, CardBody, Row, Col } from "reactstrap";

import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  onAddUser,
  onEditUser,
  viewUsers,
  getUserDetails,
  onDeactivateUser,
  onActivateUser
} from "State/Users/action-creator";
import { onViewCompanies } from "State/Corporates/action-creator";
import { viewCorporateApplicationPortofilio } from "State/ApplicationsPortofolio/action-creator";
import { onViewUserTypesArray } from "../../State/user-types/action-creator";
import { viewRolesArray } from "../../State/Roles/action-creator";
// core components

const FormItem = Form.Item;
class Rolescontrol extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleSubmit = e => {
    console.log("we reached here");
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmitCode(values);
        this.props.form.resetFields();
      }
    });
  };
  componentDidMount() {
    this.props.viewUsers();
    this.props.onViewCompanies();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 20 }
    };
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody className="all-icons">
                  <div className="eachCompnentButtonSection">Role Number 1</div>
                  <Form onSubmit={this.handleSubmit}>
                    <FormItem label="Screen1 controls">
                      {getFieldDecorator("Screen1", {
                        initialValue: ["A", "B"]
                      })(
                        <Checkbox.Group style={{ width: "100%" }}>
                          <Row>
                            <Col span={8}>
                              <Checkbox value="C">Control1</Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={8}>
                              <Checkbox value="D">controle2</Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      )}
                    </FormItem>
                    <FormItem label="Screen2 control1">
                      {getFieldDecorator("Screen2", {
                        initialValue: ["A", "B"]
                      })(
                        <Checkbox.Group style={{ width: "100%" }}>
                          <Row>
                            <Col span={8}>
                              <Checkbox value="C">screen 2 control 1</Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={8}>
                              <Checkbox value="D">D</Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      )}
                    </FormItem>

                    <button type="submit" className="btn btn-primary btn-block">
                      Submit
                    </button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userTypes: state.userTypes.userTypes,
    allUsers: state.users.users,
    allCoporates: state.companies.companies,
    userRoles: state.roles.roles,
    applicationsPortofolios:
      state.applicationsPortofolios.applicationsPortofolios
        .applicationPortoflios,
    toEditUserDetails: state.users.toEditUser
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      onViewCompanies,
      viewUsers,
      getUserDetails,
      viewCorporateApplicationPortofilio,
      onAddUser,
      onEditUser,
      onDeactivateUser,
      onActivateUser,
      onViewUserTypesArray,
      viewRolesArray
    },
    dispatch
  );
}
let RolescontrolForm = Form.create()(Rolescontrol);
export default connect(mapStateToProps, mapDispatchToProps)(RolescontrolForm);
