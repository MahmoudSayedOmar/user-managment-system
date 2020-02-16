import React from "react";
import * as _ from "lodash";

import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Icon, Popconfirm, Tooltip, Tag } from "antd";

import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { viewRoles, addRole } from "../../State/Roles/action-creator";

import RolesListingComponent from "../../components/role/role";
import {
  tryGetRoleControlsById,
  tryMapRoleControlsById
} from "../../State/Controls/action-creator";

class UserTypeDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoleTobeEdited: {},
      visible: false
    };

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = screenControlsMapper => {
    this.props.tryMapRoleControlsById(
      this.state.selectedRoleTobeEdited.id,
      screenControlsMapper
    );
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  columns = [
    {
      title: "Role",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Actions",
      dataIndex: "isActive",
      key: "isActive",
      render: (eachKey, row) => (
        <span>
          <Tooltip placement="top" title="Map menu to screens">
            <Icon
              type="retweet"
              style={{
                fontSize: "20px",

                cursor: "pointer",
                paddingRight: "5px"
              }}
              onClick={() => {
                this.props.tryGetRoleControlsById(row.id);
                debugger;
                this.setState(
                  {
                    selectedRoleTobeEdited: row
                  },
                  () => {
                    this.showModal();
                  }
                );
              }}
            />
          </Tooltip>
          {row.isActive ? (
            <Popconfirm
              title="Are you sure deActivate this application portofolio?"
              onConfirm={() => {}}
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
                onClick={() => {}}
              />
            </Tooltip>
          )}
        </span>
      )
    }
  ];

  static mapStatetToProps(state) {
    return {
      roles: state.roles.roles,
      roleScreensControls: state.controls.controls,
      loading: state.controls.loading
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { viewRoles, addRole, tryGetRoleControlsById, tryMapRoleControlsById },
      dispatch
    );
  }
  componentDidMount() {
    this.props.viewRoles(this.props.location.state.id);
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <RolesListingComponent
                columns={this.columns}
                dataSource={this.props.roles}
                pagination={false}
                listingType={"UserType Name Roles"}
                onAddRole={this.props.addRole}
                currentUserTypeId={this.props.location.state.id}
                onConfirmMapping={this.handleOk}
                onCancelMapping={this.handleCancel}
                selectedRoleTobeEdited={this.state.selectedRoleTobeEdited}
                startMapping={this.state.visible}
                roleScreensControls={this.props.roleScreensControls}
                loading={this.props.loading}
              />
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export const UserTypeDetailsScreen = connect(
  UserTypeDetailsContainer.mapStatetToProps,
  UserTypeDetailsContainer.mapDispatchToProps
)(UserTypeDetailsContainer);
