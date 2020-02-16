import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Icon, Popconfirm, Tooltip, Select } from "antd";
import AddApplicationPortofolioModal from "../add-application-portofolio-modal/add-application-portofolio-modal";
import "./application-portofolio.css";

import ListingComponent from "../listing/listing";

export default class ApplicationsPortofoliosListingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalText: "Content of the modal",
      visible: this.props.visible,
      extraModulesOptions: [],
      defaultApps: ""
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  componentWillReceiveProps(nextProps) {
    if ("applicationEditedId" in nextProps) {
      if (nextProps.applicationEditedId !== this.props.applicationEditedId) {
        if (
          nextProps.applicationEditedId &&
          nextProps.applicationEditedId !== ""
        ) {
          let toEditApplicationObject = this.props.dataSource.find(
            i => i.id === nextProps.applicationEditedId
          );
          this.refs.applicationPort.setFieldsValue({
            id: toEditApplicationObject.id,
            applicationportofolio: toEditApplicationObject.name,
            baseapplictaion: toEditApplicationObject.baseAPPId,
            extramodules:
              toEditApplicationObject.extraModules &&
              toEditApplicationObject.extraModules.length > 0
                ? toEditApplicationObject.extraModules.map(eachApp => {
                    return eachApp.moduleId;
                  })
                : []
          });
          if (toEditApplicationObject.extraModules.length > 0) {
            let extraModulesArray = this.props.baseApplications.find(
              eachExtraModule =>
                eachExtraModule.id === toEditApplicationObject.baseAPPId
            ).modulesDefaultApp;

            let extraModuleOptions = [];
            let defaultAppsArray = [];
            for (var m = 0; m < extraModulesArray.length; m++) {
              if (extraModulesArray[m].isDefault === false) {
                extraModuleOptions.push(extraModulesArray[m]);
              } else if (extraModulesArray[m].isDefault === true) {
                defaultAppsArray.push(extraModulesArray[m]);
              }
            }

            if (defaultAppsArray.length > 0) {
              this.setState({
                defaultApps: defaultAppsArray.map((eachDefaultApp, index) => {
                  return (
                    <span key={index}>
                      {index === 0 ? "Default Apps : " : ""}
                      {eachDefaultApp.title}
                      {index === defaultAppsArray.length - 1 ? ".  " : ", "}
                    </span>
                  );
                })
              });
            }
            if (extraModuleOptions.length > 0) {
              this.setState({
                extraModulesOptions: extraModuleOptions.map(baseApplication => {
                  return (
                    <Select.Option
                      key={baseApplication.id}
                      value={baseApplication.id}
                    >
                      {baseApplication.title}
                    </Select.Option>
                  );
                })
              });
            }
          }
          this.setState({
            visible: true
          });
        }
      }
    }
  }
  handleOk = applicationPortofolio => {
    this.props.onAddApplicationPortofolio(applicationPortofolio);
    this.setState({
      visible: false
    });
  };
  handleEdit = applicationPortofolio => {
    console.log(applicationPortofolio, "to edit");
    this.props.onEditApplicationPortofolio(applicationPortofolio);
    this.setState({
      visible: false
    });
    this.props.resetEditState();
  };

  handleCancel = () => {
    console.log("hahaha");
    this.refs.applicationPort.resetFields();
    this.setState({
      visible: false,
      extraModulesOptions: [],
      defaultApps: ""
    });
    this.props.resetEditState();
  };
  render() {
    return (
      <div>
        <AddApplicationPortofolioModal
          visible={this.state.visible}
          modalText={this.state.modalText}
          onOk={this.handleOk}
          onEdit={this.handleEdit}
          onCancel={this.handleCancel}
          baseApplications={this.props.baseApplications}
          extraModulesOptions={
            this.state.extraModulesOptions &&
            this.state.extraModulesOptions.length > 0
              ? this.state.extraModulesOptions
              : []
          }
          defaultApps={
            this.state.defaultApps && this.state.defaultApps !== ""
              ? this.state.defaultApps
              : ""
          }
          ref="applicationPort"
        />
        <ListingComponent
          modalTitle={"Application Portofolio"}
          columns={this.props.columns}
          dataSource={this.props.dataSource}
          pagination={{ pageSize: 10 }}
          onGoBack={() => this.props.goBack()}
          goBackText="Corporates"
          listingType={"Corprate Name Application Portofolio"}
          onAddModal={this.showModal}
        />
      </div>
    );
  }
}
