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
import {
  onAddCorporate,
  onUpdateCorporate
} from "State/Corporates/action-creator";
// core components
import FixedPlugin from "../../components/FixedPlugin/FixedPlugin";
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
    const toEditCorporate = this.props.allCompanies.find(i => i.key === id);

    // this.refs.addCorporateForm.setFieldsValue(toEditCorporate);
    this.setState({ modalTitle: "Edit " + toEditCorporate.corporateName });
    this.refs.addCorporateForm.setFieldsValue({
      key: toEditCorporate.key,
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
    // console.log("we are here id");
    console.log(id, "delete id");
    const toEditCorporate = this.props.allCompanies.find(i => i.key === id);
    console.log(toEditCorporate.actions.active, "editable one");

    this.props.onUpdateCorporate({
      key: toEditCorporate.key,
      corporateName: toEditCorporate.corporateName,
      corporatePhoneNumber: toEditCorporate.corporatePhoneNumber,
      corporateAddress: toEditCorporate.corporateAddress,
      corporateCountry: toEditCorporate.corporateCountry,
      corporateCity: toEditCorporate.corporateCity,
      corporatePostalCode: toEditCorporate.corporatePostalCode,
      corporateRegisterationNumber:
        toEditCorporate.corporateRegisterationNumber,
      actions: {
        id: toEditCorporate.key,
        active: !toEditCorporate.actions.active
      }
    });
  };

  onAddCorporateModal = () => {
    console.log("we are here");
    // let pluginChoosen = this.props.vsPlugin || "";

    this.refs.addCorporateForm.resetFields();
    this.refs.addCorporateForm.setFieldsValue({
      // plugins: pluginChoosen.plugins,
      // chunkSize: pluginChoosen.chunkSize,
      // stitch_plugin: pluginChoosen.stitch_plugin,
      // memory: pluginChoosen.memory,
      // gpu_memory: pluginChoosen.gpu_memory,
      // compress: pluginChoosen.compress
    });

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
    console.log(values, "values");
    if (values.key && values.key !== "") {
      this.props.onUpdateCorporate({
        id: values.key,
        name: values.corporateName,
        phoneNo: values.corporatePhoneNumber,
        address: values.corporateAddress,
        country: values.corporateCountry,
        city: values.corporateCity,
        zip: values.corporatePostalCode,
        registerationNo: values.corporateRegisterationNumber,
        actions: { id: values.key, active: values.corporateActive }
      });
    } else {
      this.props.onAddCorporate({
        id: this.props.allCompanies.length + 1,
        name: values.corporateName,
        phoneNo: values.corporatePhoneNumber,
        address: values.corporateAddress,
        country: values.corporateCountry,
        city: values.corporateCity,
        zip: values.corporatePostalCode,
        registerationNo: values.corporateRegisterationNumber,
        actions: { id: this.props.allCompanies.length + 1, active: false }
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
    }

    // {
    //   title: "Actions",
    //   dataIndex: "actions",
    //   key: "actions",
    //   render: eachKey => (
    //     <span>
    //       <Icon
    //         type="edit"
    //         style={{
    //           fontSize: "20px",

    //           cursor: "pointer",
    //           paddingRight: "5px"
    //         }}
    //         onClick={() => this.onEditRow(eachKey.id)}
    //       />
    //       {eachKey.active ? (
    //         <Popconfirm
    //           title="Are you sure deActivate this Company?"
    //           onConfirm={() => this.onActivateDeActivate(eachKey.id)}
    //           okText="Yes"
    //           cancelText="No"
    //         >
    //           <Tooltip placement="top" title="DeActivate">
    //             <Icon
    //               type="eye"
    //               style={{
    //                 paddingRight: "5px",
    //                 fontSize: "20px",
    //                 cursor: "pointer"
    //               }}
    //               // onClick={() => this.onDeleteRow()}
    //             />
    //           </Tooltip>
    //         </Popconfirm>
    //       ) : (
    //         <Tooltip placement="top" title="Activate">
    //           <Icon
    //             type="eye-invisible"
    //             style={{
    //               paddingRight: "5px",
    //               fontSize: "20px",
    //               cursor: "pointer"
    //             }}
    //             onClick={() => this.onActivateDeActivate(eachKey.id)}
    //           />
    //         </Tooltip>
    //       )}

    //       <Tooltip placement="top" title="Corporate Applications">
    //         <Icon
    //           type="file-add"
    //           style={{ fontSize: "20px", cursor: "pointer" }}
    //         />
    //       </Tooltip>
    //     </span>
    //   )
    // }
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
  console.log(state.companies.companies, "company");
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
      onUpdateCorporate
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Corporate);
