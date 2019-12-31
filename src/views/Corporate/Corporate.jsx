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
import { onAddCorporate, onUpdateCorporate } from "State/Layout/action-creator";
// core components
import FixedPlugin from "../../components/FixedPlugin/FixedPlugin";
import "./Corporate.css";
import AddCorpoateForm from "./AddCorpoateForm.js";

class Corporate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddCorporateModal: false,
      modalTitle: "Add Corporate"
    };
  }

  onEditRow = id => {
    const toEditCorporate = this.props.allCompanies.find(i => i.id === id);

    // this.refs.addCorporateForm.setFieldsValue(toEditCorporate);
    this.setState({ modalTitle: "Edit " + toEditCorporate.corporateName });
    this.refs.addCorporateForm.setFieldsValue({
      id: toEditCorporate.id,
      corporateName: toEditCorporate.corporateName,
      corporatePhoneNumber: toEditCorporate.corporatePhoneNumber,
      corporateAddress: toEditCorporate.corporateAddress,
      corporateCountry: toEditCorporate.corporateCountry,
      corporateCity: toEditCorporate.corporateCity,
      corporatePostalCode: toEditCorporate.corporatePostalCode,
      corporateRegisterationNumber:
        toEditCorporate.corporateRegisterationNumber,
      corporateActive: toEditCorporate.actions.active
    });

    this.setState({
      showAddCorporateModal: true
    });
  };
  onActivateDeActivate = id => {
    const toEditCorporate = this.props.allCompanies.find(i => i.id === id);

    this.props.onUpdateCorporate({
      ...this.props.allCompanies.find(eachCompany => eachCompany.id === id),
      actions: {
        id: toEditCorporate.id,
        active: !toEditCorporate.actions.active
      }
    });
  };

  onAddCorporateModal = () => {
    this.refs.addCorporateForm.resetFields();

    this.setState({
      modalTitle: "Add Corporate",
      showAddCorporateModal: true
    });
  };
  onCancelSettingsModal = () => {
    this.setState({
      modalTitle: "Add Corporate",
      showAddCorporateModal: false
    });
  };
  onAddCorporate = values => {

    if (values.id && values.id !== "") {
      this.props.onUpdateCorporate({
        ...this.props.allCompanies.find(
          eachcompany => eachcompany.id === values.id
        ),
        id: values.id,
        corporateName: values.corporateName,
        corporatePhoneNumber: values.corporatePhoneNumber,
        corporateAddress: values.corporateAddress,
        corporateCountry: values.corporateCountry,
        corporateCity: values.corporateCity,
        corporatePostalCode: values.corporatePostalCode,
        corporateRegisterationNumber: values.corporateRegisterationNumber
      });
    } else {
      this.props.onAddCorporate({
        id: this.props.allCompanies.length + 1,
        corporateName: values.corporateName,
        corporatePhoneNumber: values.corporatePhoneNumber,
        corporateAddress: values.corporateAddress,
        corporateCountry: values.corporateCountry,
        corporateCity: values.corporateCity,
        corporatePostalCode: values.corporatePostalCode,
        corporateRegisterationNumber: values.corporateRegisterationNumber,
        actions: { id: this.props.allCompanies.length + 1, active: false }
      });
    }

    this.refs.addCorporateForm.resetFields();
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

  columns = [
    {
      title: "corporate Name",
      dataIndex: "corporateName",
      key: "corporateName"
    },
    {
      title: "Country - City",
      dataIndex: "corporateCountry",
      key: "corporateCountry",
      render: (country, row) => (
        <span>{country + " - " + row.corporateCity}</span>
      )
    },
    // {
    //   title: "corporate City",
    //   dataIndex: "corporateCity",
    //   key: "corporateCity"
    // },
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
          {eachKey.active ? (
            <Popconfirm
              title="Are you sure deActivate this Company?"
              onConfirm={() => this.onActivateDeActivate(eachKey.id)}
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
                onClick={() => this.onActivateDeActivate(eachKey.id)}
              />
            </Tooltip>
          )}

          <Tooltip placement="top" title="Corporate Applications">
            <Icon
              type="file-add"
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </Tooltip>
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
                        onClick={() => this.onAddCorporateModal()}
                      >
                        Add Corporate
                      </Button>
                    </div>
                  </div>
                  <div className="eachCompnentButtonSection">
                    <Table
                      rowKey="id"
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
            title={this.state.modalTitle}
            onCancel={this.onCancelSettingsModal}
            onOk={this.onAddCorporate}
            visible={this.state.showAddCorporateModal}
            ref="addCorporateForm"
            media={this.props.medias}
            plugins={this.props.plugins}
          />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    allCompanies: state.companies.companies
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      onAddCorporate,
      onUpdateCorporate
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Corporate);
