import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Icon, Popconfirm, Tooltip } from "antd";
import AddApplicationPortofolioModal from "../add-application-portofolio-modal/add-application-portofolio-modal";
import "./application-portofolio.css";

import ListingComponent from "../listing/listing";

export default class ApplicationsPortofoliosListingComponent extends React.Component {
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

  handleOk = applicationPortofolio => {
    this.props.onAddApplicationPortofolio(applicationPortofolio);
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
        <AddApplicationPortofolioModal
          visible={this.state.visible}
          modalText={this.state.modalText}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        />
        <ListingComponent
          modalTitle={"Application Portofolio"}
          columns={this.props.columns}
          dataSource={this.props.dataSource}
          pagination={false}
          listingType={"Corprate Name Application Portofolio"}
          onAddModal={this.showModal}
        />
      </div>
    );
  }
}
