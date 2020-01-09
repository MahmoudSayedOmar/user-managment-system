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
import { onAddUser, onEditUser, viewUsers } from "State/Users/action-creator";
// core components
import moment from "moment";
import "./Users.css";
import AddUserForm from "./AddUserForm.js";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddUserModal: false,
      modalTitle: "Add User"
    };
  }

  componentDidMount() {
    this.props.viewUsers();
  }

  onEditRow = id => {
    debugger;
    const toEditUser = this.props.allUsers.find(i => i.id === id);

    this.setState({
      showAddUserModal: true
    });
    this.setState({
      modalTitle: "Edit " + toEditUser.fName + " " + toEditUser.mName
    });

    this.refs.addUserForm.setFieldsValue({
      ...toEditUser,
      id: toEditUser.id,
      fName: toEditUser.fName,
      mName: toEditUser.mName,
      lName: toEditUser.lName,
      validateBy: toEditUser.validateBy,
      email: toEditUser.email,
      dateOfBirth: moment(toEditUser.dateOfBirth),
      imageURL: toEditUser.photo,
      sex: toEditUser.sex,
      mobileNumber: toEditUser.mobileNumber,
      // corporate: toEditUser.corporate,
      defaultLanguage: toEditUser.defaultLanguage
    });
  };
  onActivateDeActivate = id => {
    const toEditUser = this.props.allUsers.find(i => i.id === id);
    debugger;

    this.props.onEditUser({
      ...this.props.allUsers.find(eachUser => eachUser.id === id)
      // actions: {
      //   id: id,
      //   active: !toEditUser.actions.active
      // }
    });
  };

  onAddUserModal = () => {
    this.refs.addUserForm.resetFields();
    this.setState({
      showAddUserModal: true
    });
  };
  onCancelSettingsModal = () => {
    this.setState({
      modalTitle: "Add User",
      showAddUserModal: false
    });
  };
  onAddUser = values => {
    debugger;
    let dateOfBirth = values.dateOfBirth;
    console.log("vvvvvvvv", values);
    if (values.id && values.id !== "") {
      debugger;
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
        corporate: values.corporate
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
        // corporate: values.corporate,
        photo: values.photo
      });
    }

    this.refs.addUserForm.resetFields();
    this.setState({
      showAddUserModal: false
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
              title="Are you sure deActivate this Company?"
              onConfirm={() => this.onActivateDeActivate(id)}
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
                onClick={() => this.onActivateDeActivate(id)}
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
            title={this.state.modalTitle}
            onCancel={this.onCancelSettingsModal}
            onOk={this.onAddUser}
            visible={this.state.showAddUserModal}
            ref="addUserForm"
            allCoporates={this.props.allCoporates}
          />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.users.users,
    allCoporates: state.companies.companies
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      viewUsers,
      // onShowCompanies //  onInitFunction: mainObject => dispatch(actions.onShowCompnay(mainObject))
      onAddUser,
      onEditUser
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
