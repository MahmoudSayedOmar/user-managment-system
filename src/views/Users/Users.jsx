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
import { Button, Table, Popconfirm, Tooltip, Icon } from "antd";

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
import { viewCorporateDetails } from "State/ApplicationsPortofolio/action-creator";
import { onViewUserTypesArray } from "../../State/user-types/action-creator";
import { viewRolesArray } from "../../State/Roles/action-creator";
// core components
import moment from "moment";
import "./Users.css";
import AddUserForm from "./AddUserForm.js";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddUserModal: false,
      modalTitle: "Add User",
      isEdit: false
    };
  }

  componentDidMount() {
    this.props.viewUsers();
    this.props.onViewCompanies();
    // this.props.viewCorporateDetails(this.props.location.state.id);
    // this.props.onViewUserTypes(2);
  }
  componentWillReceiveProps(nextProps) {
    if ("toEditUserDetails" in nextProps) {
      if (nextProps.toEditUserDetails !== this.props.toEditUserDetails) {
        this.updateFormFields(nextProps.toEditUserDetails);
      }
    }
  }
  updateFormFields = userEditableData => {
    const toEditUser = userEditableData;
    // console.log(toEditUser, "userDetails");
    this.setState({
      showAddUserModal: true,
      isEdit: false
    });
    this.setState({
      modalTitle:
        "Edit " +
        toEditUser.user.fName +
        " " +
        toEditUser.user.mName +
        " " +
        toEditUser.user.lName,
      isEdit: true
    });
    if (toEditUser) {
      let applicationPortofliosArray = [];
      let userTypesArray = [];
      if (toEditUser.corporate) {
        applicationPortofliosArray = toEditUser.applicationPortoflios.map(
          (eachApp, index) => {
            return eachApp.id;
          }
        );

        this.onChangeCorporate(toEditUser.corporate.id); // to get all the application portofilios to be able to show name and id of them
        this.onChangeApplications(applicationPortofliosArray);
      }
      if (toEditUser.userTypes) {
        userTypesArray = toEditUser.userTypes.map((eachType, index) => {
          return eachType.id;
        });
        this.onChangeTypes(userTypesArray);
      }
    }
    this.refs.addUserForm.setFieldsValue({
      id: toEditUser.user.id,
      fName: toEditUser.user.fName,
      mName: toEditUser.user.mName,
      lName: toEditUser.user.lName,
      validateBy: toEditUser.user.smsVerify ? "sms" : "mail",
      email: toEditUser.user.email,
      dateOfBirth: moment(toEditUser.user.dateOfBirth),
      imageURL: toEditUser.photo,
      sex: toEditUser.user.sex,
      mobileNumber: toEditUser.user.mobileNumber,
      userCoporate: toEditUser.corporate ? toEditUser.corporate.id : "",
      userApplications: toEditUser.applicationPortoflios
        ? toEditUser.applicationPortoflios.map(eachApp => {
            return eachApp.id;
          })
        : [],
      userTypes: toEditUser.userTypes
        ? toEditUser.userTypes.map(eachType => eachType.id)
        : [],
      userRoles: toEditUser.roles
        ? toEditUser.roles.map((eachRole, index) => eachRole.id)
        : [],
      defaultLanguage: toEditUser.user.defaultLanguage
    });
  };
  onEditRow = id => {
    this.props.getUserDetails(id);
  };
  onDeactivate = id => {
    this.props.onDeactivateUser(id);
  };
  onActivate = id => {
    this.props.onActivateUser(id);
  };

  onAddUserModal = () => {
    this.refs.addUserForm.resetFields();
    this.setState({
      showAddUserModal: true,
      isEdit: false
    });
  };
  onChangeCorporate = value => {
    this.props.viewCorporateDetails(value);
  };
  onChangeApplications = value => {
    this.props.onViewUserTypesArray(value);
  };
  onChangeTypes = value => {
    this.props.viewRolesArray(value);
  };
  onCancelSettingsModal = () => {
    this.refs.addUserForm.resetFields();
    this.onChangeCorporate([]); // to get all the application portofilios to be able to show name and id of them
    this.onChangeApplications([]);
    this.onChangeTypes([]);
    this.setState({
      modalTitle: "Add User",
      showAddUserModal: false,
      isEdit: false
    });
  };
  onAddUser = values => {
    let dateOfBirth = values.dateOfBirth;

    if (values.id && values.id !== "") {
      this.props.onEditUser({
        ...this.props.allUsers.find(user => user.id === values.id),
        id: values.id,
        fName: values.fName,
        mName: values.mName,
        lName: values.lName,
        email: values.email,
        dateOfBirth: dateOfBirth,
        sex: values.sex,
        mobileNumber: values.mobileNumber,
        defaultLanguage: values.defaultLanguage,
        validateBy: values.validateBy,
        photo: values.photo,
        corporate: values.corporate,
        roles: values.userRoles
      });
    } else {
      this.props.onAddUser({
        // id: this.props.allUsers.length + 1,
        fName: values.fName,
        mName: values.mName,
        lName: values.lName,
        email: values.email,
        dateOfBirth: dateOfBirth,
        sex: values.sex,
        mobileNumber: values.mobileNumber,
        defaultLanguage: values.defaultLanguage,
        validateBy: values.validateBy,
        corporate: values.corporate,
        photo: values.photo,
        password: values.password,
        confirmPassword: values.password,
        roles: values.userRoles
      });
    }

    this.refs.addUserForm.resetFields();
    this.setState({
      showAddUserModal: false,
      isEdit: true
    });
  };

  columns = [
    {
      title: "Name",
      dataIndex: "fName",
      key: "fName",
      render: (fName, row) => {
        return <span>{fName + " " + row.mName + " " + row.lName}</span>;
      }
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email"
    },

    {
      title: "Mobile",
      dataIndex: "mobileNumber",
      key: "mobileNumber"
    },

    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (id, row) => (
        <span>
          <Icon
            type="edit"
            style={{
              fontSize: "20px",
              cursor: "pointer",
              paddingRight: "5px"
            }}
            onClick={() => this.onEditRow(id)}
          />
          {row.isActive ? (
            <Popconfirm
              title="Are you sure deActivate this User?"
              onConfirm={() => this.onDeactivate(row.id)}
              okText="Yes"
              cancelText="No"
            >
              <Tooltip placement="top" title="DeActivate">
                <Icon
                  type="eye"
                  style={{
                    paddingRight: "5px",
                    fontSize: "20px",
                    cursor: "pointer"
                  }}
                  // onClick={() => this.onDeleteRow()}
                />
              </Tooltip>
            </Popconfirm>
          ) : (
            <Tooltip placement="top" title="Activate">
              <Icon
                type="eye-invisible"
                style={{
                  paddingRight: "5px",
                  fontSize: "20px",
                  cursor: "pointer"
                }}
                onClick={() => this.onActivate(id)}
              />
            </Tooltip>
          )}
        </span>
      )
    }
  ];
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody className="all-icons">
                  <div className="eachCompnentButtonSection">
                    <div className="buttonRight">
                      <Button
                        type="primary"
                        size="small"
                        onClick={() => this.onAddUserModal()}
                      >
                        Add User
                      </Button>
                    </div>
                  </div>
                  <div className="eachCompnentButtonSection">
                    <Table
                      rowKey="id"
                      columns={this.columns}
                      dataSource={this.props.allUsers}
                      pagination={false}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <FixedPlugin />  this is for search when be*/}
          <AddUserForm
            isEdit={this.state.isEdit}
            title={this.state.modalTitle}
            onCancel={this.onCancelSettingsModal}
            onOk={this.onAddUser}
            visible={this.state.showAddUserModal}
            ref="addUserForm"
            allCoporates={this.props.allCoporates}
            userTypes={this.props.userTypes}
            userRoles={this.props.userRoles}
            applicationsPortofolios={this.props.applicationsPortofolios}
            onChangeCorporate={value => this.onChangeCorporate(value)}
            onChangeApplications={value => this.onChangeApplications(value)}
            onChangeTypes={value => this.onChangeTypes(value)}
          />
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
      state.applicationsPortofolios.applicationsPortofolios,
    toEditUserDetails: state.users.toEditUser
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      onViewCompanies,
      viewUsers,
      getUserDetails,
      viewCorporateDetails,
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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
