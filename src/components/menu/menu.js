import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Icon, Popconfirm, Tooltip } from "antd";
import "./menu.css";
import { AddMenuForm } from "../add-menu/add-menu";
import ListingComponent from "../listing/listing";
import { MenuScreenMapperForm } from "../MenuScreenMapper/menu-screen-mapper";

export default class MenusListingComponent extends React.Component {
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

  handleOk = menu => {
    this.props.onAddMenu(this.props.currentApplicationPortofolio, menu);

    this.refs.addMenuForm.resetFields();
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
    // debugger;
    return (
      <div>
        <AddMenuForm
          visible={this.state.visible}
          modalText={this.state.modalText}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          ref="addMenuForm"
          title={"Add Menu"}
        />

        <MenuScreenMapperForm
          visible={this.props.startMapping}
          onOk={this.props.onConfirmMapping}
          onCancel={this.props.onCancelMapping}
          ref="mappingMenuForm"
          title={"Map Menu to Screens"}
          options={this.props.options}
          selectedScreens={this.props.selectedScreens}
        />

        <ListingComponent
          modalTitle={"Menu"}
          columns={this.props.columns}
          dataSource={this.props.dataSource}
          pagination={false}
          listingType={"Menus"}
          onAddModal={this.showModal}
        />
      </div>
    );
  }
}
