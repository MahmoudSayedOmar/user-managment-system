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
import { onAddCorporate } from "State/Layout/action-creator";
// core components
import FixedPlugin from "../../components/FixedPlugin/FixedPlugin";
import "./Corporate.css";
import AddCorpoateForm from "./AddCorpoateForm.js";

class Corporate extends React.Component {
  onEditRow = id => {
    // console.log("we are here id");
    console.log(id, "edit id");
  };
  onDeleteRow = id => {
    // console.log("we are here id");
    console.log(id, "delete id");
  };

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
    this.props.onAddCorporate({
      key: this.props.allCompanies.length + 1,
      corporateName: values.corporateName,
      corporatePhoneNumber: values.corporatePhoneNumber,
      corporateAddress: values.corporateAddress,
      actions: { id: this.props.allCompanies.length + 1, active: false }
    });
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
  columns = [
    {
      title: "corporate Name",
      dataIndex: "corporateName",
      key: "corporateName"
    },
    {
      title: "Phone",
      dataIndex: "corporatePhoneNumber",
      key: "corporatePhoneNumber"
    },

    {
      title: "Address",
      key: "corporateAddress",
      dataIndex: "corporateAddress"
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: eachKey => (
        <span>
          <Icon
            type="edit"
            style={{
              fontSize: "20px",

              cursor: "pointer",
              paddingRight: "5px"
            }}
            onClick={() => this.onEditRow(eachKey.id)}
          />
          {!eachKey.active ? (
            <Popconfirm
              title="Are you sure delete this Result?"
              onConfirm={() => this.onDeleteRow(eachKey.id)}
              okText="Yes"
              cancelText="No"
            >
              <Tooltip placement="top" title="Activate">
                <Icon
                  type="eye-invisible"
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  // onClick={() => this.onDeleteRow()}
                />
              </Tooltip>
            </Popconfirm>
          ) : (
            <Tooltip placement="top" title="DeActivate">
              <Icon
                type="eye"
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={() => this.onEditRow(eachKey.id)}
              />
            </Tooltip>
          )}
        </span>
      )
    }
  ];
  render() {
    console.log(this.props.allCompanies.length, "all compannies");
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
                      columns={this.columns}
                      dataSource={this.props.allCompanies}
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

function mapStateToProps(state) {
  console.log(state.companies, "company");
  return {
    allCompanies: state.companies.companies
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      // onShowCompanies //  onInitFunction: mainObject => dispatch(actions.onShowCompnay(mainObject))
      onAddCorporate
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Corporate);
