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
  onAddCorporate,
  onDeactivateCorporate,
  onActivateCorporate,
  onUpdateCorporate
} from "State/Corporates/action-creator";
// core components
import "./Corporate.css";
import AddCorpoateForm from "./AddCorpoateForm";
import { onViewCompanies } from "State/Corporates/action-creator";

class Corporate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAddCorporateModal: false,
      modalTitle: "Add Corporate"
    };
  }

  componentDidMount() {
    this.props.onViewCompanies();
  }

  onEditRow = id => {
    const toEditCorporate = this.props.allCompanies.find(i => i.id === id);

    // this.refs.addCorporateForm.setFieldsValue(toEditCorporate);
    this.setState({ modalTitle: "Edit " + toEditCorporate.name });
    this.refs.addCorporateForm.setFieldsValue({
      id: toEditCorporate.id,
      corporateName: toEditCorporate.name,
      corporatePhoneNumber: toEditCorporate.phoneNo,
      corporateAddress: toEditCorporate.address,
      corporateCountry: toEditCorporate.country,
      corporateCity: toEditCorporate.city,
      corporatePostalCode: toEditCorporate.zip,
      corporateRegisterationNumber: toEditCorporate.registerationNo
    });

    this.setState({
      showAddCorporateModal: true
    });
  };

  onDeactivate = id => {
    this.props.onDeactivateCorporate(id);
  };
  onActivate = id => {
    this.props.onActivateCorporate(id);
  };
  onActivateDeActivate = id => {
    // console.log(id, "we are here");
    const toEditCorporate = this.props.allCompanies.find(i => i.id === id);

    this.props.onUpdateCorporate({
      ...this.props.allCompanies.find(eachCompany => eachCompany.id === id),

      isActive: !toEditCorporate.isActive
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

        name: values.corporateName,
        phoneNo: values.corporatePhoneNumber,
        address: values.corporateAddress,
        country: values.corporateCountry,
        city: values.corporateCity,
        zip: values.corporatePostalCode,
        registerationNo: values.corporateRegisterationNumber
      });
    } else {
      debugger;
      this.props.onAddCorporate({
        name: values.corporateName,
        phoneNo: values.corporatePhoneNumber,
        address: values.corporateAddress,
        country: values.corporateCountry,
        city: values.corporateCity,
        zip: values.corporatePostalCode,
        registerationNo: values.corporateRegisterationNumber
      });
    }

    this.refs.addCorporateForm.resetFields();

    this.setState({
      showAddCorporateModal: false
    });
  };

  columns = [
    {
      title: "Corporate Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Country - City",
      dataIndex: "country",
      key: "country",
      render: (country, row) => <span>{country + " - " + row.city}</span>
    },
    {
      title: "Phone",
      dataIndex: "phoneNo",
      key: "phoneNo"
    },

    {
      title: "Address",
      key: "address",
      dataIndex: "address"
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
              title="Are you sure deActivate this Company?"
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
                      onRowClick={rowData => {
                        debugger;

                        this.props.history.push("/admin/corporatedetails", {
                          id: rowData.id
                        });
                      }}
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
      onViewCompanies,
      // onShowCompanies //  onInitFunction: mainObject => dispatch(actions.onShowCompnay(mainObject))
      onAddCorporate,
      onDeactivateCorporate,
      onUpdateCorporate,
      onActivateCorporate
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Corporate);
