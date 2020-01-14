import React from "react";
import * as _ from "lodash";

import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Icon, Popconfirm, Tooltip, Tag } from "antd";

import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { viewRoles, addRole } from "../../State/Roles/action-creator";

import RolesListingComponent from "../../components/role/role";

class UserTypeDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
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
          {row.isActive ? (
            <Popconfirm
              title="Are you sure deActivate this application portofolio?"
              onConfirm={() => {
                console.log("row", row);
                console.log("Key", eachKey);

                //   this.props.changeApplicationPortofolioActivationStatus(
                //     row.id,
                //     false
                //   );
              }}
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
                onClick={() => {
                  console.log("row", row);
                  console.log("Key", eachKey);

                  // this.props.changeApplicationPortofolioActivationStatus(
                  //   row.id,
                  //   true
                  // );
                }}
              />
            </Tooltip>
          )}
        </span>
      )
    }
  ];

  static mapStatetToProps(state) {
    return {
      roles: state.roles.roles
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ viewRoles, addRole }, dispatch);
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
