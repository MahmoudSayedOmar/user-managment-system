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
import { Button, Table, Icon, Popconfirm, Tooltip } from "antd";

import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  onViewUserTypes,
  onAddUserType,
  onActivateUserType,
  onDeactivateUserType,
  onUpdateUserType
} from "../../State/user-types/action-creator";
// core components
import "./user-types.css";
import { AddUserTypeForm } from "./add-user-form";
var APP_PORTFOLIOID = 0;
class UserTypes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddUserTypeModal: false,
      modalTitle: "Add Users type"
    };
  }

  componentDidMount() {
    this.props.onViewUserTypes(this.props.location.state.id);
    APP_PORTFOLIOID = this.props.location.state.id;
  }

  onEditRow = id => {
    const toEditUserType = this.props.userTypes.find(i => i.id === id);

    // this.refs.addUserTypeForm.setFieldsValue(toEditUserType);
    this.setState({ modalTitle: "Edit " + toEditUserType.name });
    this.refs.addUserTypeForm.setFieldsValue({
      id: toEditUserType.id,
      name: toEditUserType.name
    });

    this.setState({
      showAddUserTypeModal: true
    });
  };

  onDeactivate = id => {
    this.props.onDeactivateUserType(id);
  };
  onActivate = id => {
    this.props.onActivateUserType(id);
  };

  onAddUserTypeModal = () => {
    this.refs.addUserTypeForm.resetFields();

    this.setState({
      modalTitle: "Add User type",
      showAddUserTypeModal: true
    });
  };

  onCancelSettingsModal = () => {
    this.setState({
      modalTitle: "Add User type",
      showAddUserTypeModal: false
    });
  };

  onAddUserType = values => {
    if (values.id && values.id !== "") {
      console.log("we are here in edit");
      this.props.onUpdateUserType({
        ...this.props.userTypes.find(eachType => eachType.id === values.id),

        name: values.name
      });
    } else {
      this.props.onAddUserType(
        {
          name: values.name
        },
        APP_PORTFOLIOID
      );
    }

    this.refs.addUserTypeForm.resetFields();

    this.setState({
      showAddUserTypeModal: false
    });
  };

  columns = [
    {
      title: "User type",
      dataIndex: "name",
      key: "name",
      render: (name, row) => (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.props.history.push(`/admin/roles/${row.id}`, {
              id: row.id,
              navTitle: row.name + "'s Roles"
            });
          }}
        >
          {name}
        </span>
      )
    },
    {
      title: "Actions",
      dataIndex: "isActive",
      key: "isActive",
      render: (eachKey, row) => (
        <span>
          <Icon
            type="edit"
            style={{
              fontSize: "20px",

              cursor: "pointer",
              paddingRight: "5px"
            }}
            onClick={() => this.onEditRow(row.id)}
          />
          {row.isActive ? (
            <Popconfirm
              title="Are you sure deActivate this User type?"
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
                onClick={() => this.onActivate(row.id)}
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
                        onClick={() => this.onAddUserTypeModal()}
                      >
                        Add User type
                      </Button>
                    </div>
                  </div>
                  <div className="eachCompnentButtonSection">
                    <Table
                      rowKey="id"
                      columns={this.columns}
                      dataSource={this.props.userTypes}
                      pagination={false}
                      onRowClick={rowData => {
                        console.log(this.props.history);
                        console.log("ROWKEY", rowData.id);
                      }}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <FixedPlugin />  this is for search when be*/}
          <AddUserTypeForm
            title={this.state.modalTitle}
            onCancel={this.onCancelSettingsModal}
            onOk={this.onAddUserType}
            visible={this.state.showAddUserTypeModal}
            ref="addUserTypeForm"
            media={this.props.medias}
            plugins={this.props.plugins}
          />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.userTypes.userTypes, "userTypes");
  return {
    userTypes: state.userTypes.userTypes
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      onViewUserTypes,
      onAddUserType,
      onActivateUserType,
      onDeactivateUserType,
      onUpdateUserType
    },
    dispatch
  );
}

export const UserTypesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTypes);
