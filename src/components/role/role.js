import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Icon, Popconfirm, Tooltip } from "antd";
import "./role.css";
import { AddRoleForm } from "../add-role/add-role";
import ListingComponent from "../listing/listing";

export default class RolesListingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalText: "Content of the modal",
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

  handleOk = role => {
    this.props.onAddRole(this.props.currentUserTypeId, role);
    console.log(role);
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <AddRoleForm
          visible={this.state.visible}
          modalText={this.state.modalText}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          ref="addRoleForm"
          title={"Add Role"}
        />
        <ListingComponent
          modalTitle={"Role"}
          columns={this.props.columns}
          dataSource={this.props.dataSource}
          pagination={false}
          listingType={"UserType Name Roles"}
          onAddModal={this.showModal}
        />
      </div>
    );
  }
}
