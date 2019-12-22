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
import { Button, Table } from "antd";

// core components
import FixedPlugin from "../../components/FixedPlugin/FixedPlugin";
import "./Corporate.css";
import AddCorpoateForm from "./AddCorpoateForm.js";
const dataSource = [
  {
    key: "1",
    name: "Company 1",
    phoneNumber: 32,
    address: "10 Downing Street",
    actions: "edit | Disable | Add Application"
  },
  {
    key: "2",
    name: "Company 2",
    phoneNumber: 432343242,
    address: "10 Downing Street",
    actions: "edit | Enable | Add Application"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber"
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions"
  }
];
class Corporate extends React.Component {
  onAddCorporateModal = () => {
    console.log("we are here");
    // let pluginChoosen = this.props.vsPlugin || "";

    this.refs.addSettingsForm.resetFields();
    this.refs.addSettingsForm.setFieldsValue({
      // plugins: pluginChoosen.plugins,
      // chunkSize: pluginChoosen.chunkSize,
      // stitch_plugin: pluginChoosen.stitch_plugin,
      // memory: pluginChoosen.memory,
      // gpu_memory: pluginChoosen.gpu_memory,
      // compress: pluginChoosen.compress
    });

    this.setState({
      showAddCorporateModal: true
    });
  };
  onCancelSettingsModal = () => {
    this.setState({
      showAddCorporateModal: false
    });
  };
  onAddCorporate = values => {
    console.log(values, "values");
    // this.props.onAddSettingsPlugin({
    //   plugins: plugin.plugins,
    //   stitch_plugin: plugin.stitch_plugin,
    //   chunkSize: plugin.chunkSize,
    //   memory: plugin.memory,
    //   gpu_memory: plugin.gpu_memory,
    //   compress: plugin.compress
    // });

    this.setState({
      showAddCorporateModal: false
    });
  };
  state = {
    showAddCorporateModal: false
  };
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
                        onClick={() => this.onAddCorporateModal()}
                      >
                        Add Corporate
                      </Button>
                    </div>
                  </div>
                  <div className="eachCompnentButtonSection">
                    <Table
                      dataSource={dataSource}
                      columns={columns}
                      pagination={false}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* <FixedPlugin />  this is for search when be*/}
          <AddCorpoateForm
            title="Corporate"
            onCancel={this.onCancelSettingsModal}
            onOk={this.onAddCorporate}
            visible={this.state.showAddCorporateModal}
            ref="addSettingsForm"
            media={this.props.medias}
            plugins={this.props.plugins}
          />
        </div>
      </>
    );
  }
}

export default Corporate;
