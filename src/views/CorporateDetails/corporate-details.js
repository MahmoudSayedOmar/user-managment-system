import React from "react";
import * as _ from "lodash";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Popconfirm, Tooltip, Tag, Descriptions, Icon } from "antd";
import { Provider } from "../../context";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import ApplicationsPortofoliosListingComponent from "../../components/application-portofolio/application-portofolio";
import { tryGetAllModules } from "../../State/ExtraModules/action-creator";
import { tryGetAllDefaultApplications } from "../../State/DefaultApplications/action-creator";
import {
  viewCorporateApplicationPortofilio,
  addApplicationPortofolioToCorporate,
  editApplicationPortofolioToCorporate,
  changeApplicationPortofolioActivationStatus
} from "../../State/ApplicationsPortofolio/action-creator";
import {
  onUpdateCorporate,
  onViewCompany
} from "State/Corporates/action-creator";
import AddCorpoateForm from "../Corporates/AddCorpoateForm";
class CorporateDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddCorporateModal: false,
      modalTitle: "Add Corporate",
      applicationPortoflios: [],
      corporateData: {},
      applicationEditedId: ""
    };
  }
  onResetEditState = () => {
    // this function is to reset the applicationEditedId, to open the modal when adding ;
    this.setState({ applicationEditedId: "" });
  };
  onEditCorporate = values => {
    if (values.id && values.id !== "") {
      this.props.onUpdateCorporate({
        ...this.state.corporateData,
        name: values.corporateName,
        phoneNo: values.corporatePhoneNumber,
        address: values.corporateAddress,
        country: values.corporateCountry,
        city: values.corporateCity,
        zip: values.corporatePostalCode,
        registerationNo: values.corporateRegisterationNumber
      });
    } else {
    }

    this.refs.addCorporateForm.resetFields();

    this.setState({
      showAddCorporateModal: false
    });
  };

  onCancelSettingsModal = () => {
    this.setState({
      modalTitle: "Add Corporate",
      showAddCorporateModal: false
    });
  };
  onEditRow = id => {
    this.setState({ applicationEditedId: id });
  };
  onEditCompany = () => {
    // const toEditCorporate = this.props.allCompanies.find(i => i.id === id);
    let corporateData = this.state.corporateData;
    this.setState({ modalTitle: "Edit " + corporateData.name });
    this.refs.addCorporateForm.setFieldsValue({
      id: corporateData.id,
      corporateName: corporateData.name,
      corporatePhoneNumber: corporateData.phoneNo,
      corporateAddress: corporateData.address,
      corporateCountry: corporateData.country,
      corporateCity: corporateData.city,
      corporatePostalCode: corporateData.zip,
      corporateRegisterationNumber: corporateData.registerationNo
    });
    this.setState({
      showAddCorporateModal: true
    });
  };

  columns = [
    {
      title: "Application Name",
      dataIndex: "name",
      key: "name",
      render: (name, row) => (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.props.history.push(`/admin/users/types/${row.id}`, {
              id: row.id,
              navTitle: row.name + "'s Types"
            });
          }}
        >
          {name}
        </span>
      )
    },
    {
      title: "Base Application",
      dataIndex: "baseAPPId",
      key: "baseAPPId",
      render: (baseAPPId, row) => (
        <span>
          {this.props.baseApplications.find(obj => obj.id === baseAPPId)
            ? this.props.baseApplications.find(obj => obj.id === baseAPPId)
                .title
            : ""}
        </span>
      )
    },
    {
      title: "Extra Modules",
      dataIndex: "extraModules",
      key: "extraModules",
      render: extraModules => {
        return (
          <span>
            {" "}
            {_.map(extraModules, module => {
              return (
                <Tag color="blue" key={module.moduleId}>
                  {module.module ? module.module.name : ""}
                </Tag>
              );
            })}
          </span>
        );
      }
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
              title="Are you sure deActivate this application portofolio?"
              onConfirm={() => {
                this.props.changeApplicationPortofolioActivationStatus(
                  row.id,
                  false
                );
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
                  // console.log("row", row);
                  // console.log("Key", eachKey);

                  this.props.changeApplicationPortofolioActivationStatus(
                    row.id,
                    true
                  );
                }}
              />
            </Tooltip>
          )}
          <Tooltip placement="top" title="Adding Menus">
            <Icon
              onClick={() => {
                this.props.history.push(`/admin/menus/${row.id}`, {
                  id: row.id,
                  navTitle: row.name + "'s Menus"
                });
              }}
              type="file-add"
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </Tooltip>
        </span>
      )
    }
  ];

  static mapStatetToProps(state) {
    console.log(
      state.applicationsPortofolios.applicationsPortofolios,
      "application porotofflios"
    );
    return {
      // selectedCompany: state.companies.selectedCompany,
      allCompanies: state.companies.companies,
      corporateData: state.companies.selectedCompany,

      applicationPortoflios:
        state.applicationsPortofolios.applicationsPortofolios, // last .applicationPortoflios will be removed when the fix is done also in backend
      baseApplications: state.defaultApplications.defaultApplications,
      modules: state.module.modules
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        viewCorporateApplicationPortofilio,
        onViewCompany,
        addApplicationPortofolioToCorporate,
        editApplicationPortofolioToCorporate,
        tryGetAllModules,
        changeApplicationPortofolioActivationStatus,
        tryGetAllDefaultApplications,
        onUpdateCorporate
      },
      dispatch
    );
  }
  componentDidMount() {
    this.props.viewCorporateApplicationPortofilio(this.props.location.state.id);
    this.props.onViewCompany(this.props.location.state.id);
    this.props.tryGetAllModules();
    this.props.tryGetAllDefaultApplications();
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.applicationPortoflios &&
      nextProps.applicationPortoflios.length > 0
    ) {
      if (this.props.applicationPortoflios !== nextProps.applicationPortoflios)
        this.setState({
          applicationPortoflios: nextProps.applicationPortoflios
        });
    } else {
      this.setState({
        applicationPortoflios: this.props.applicationPortoflios
      });
    }
    if ("allCompanies" in nextProps) {
      if (nextProps.allCompanies[-1]) {
        this.setState({
          corporateData: nextProps.allCompanies[-1]
        });
      } else if (nextProps.allCompanies.length > 0) {
        if (
          nextProps.allCompanies[
            nextProps.allCompanies.findIndex(
              each => each.id === this.props.location.state.id
            )
          ].id === this.props.location.state.id
        ) {
          this.setState({
            corporateData:
              nextProps.allCompanies[
                nextProps.allCompanies.findIndex(
                  each => each.id === this.props.location.state.id
                )
              ]
          });
        }
      } else {
        this.setState({
          corporateData: this.props.corporateData
        });
      }
    }
  }
  render() {
    let corporateData = this.state.corporateData;

    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Descriptions
                    title={
                      <span>
                        {corporateData.name} Info
                        <Tooltip placement="top" title="Edit Basic Info">
                          {" "}
                          <Icon
                            type="edit"
                            style={{
                              fontSize: "20px",

                              cursor: "pointer",
                              paddingRight: "5px"
                            }}
                            onClick={() => this.onEditCompany()}
                          />
                        </Tooltip>
                      </span>
                    }
                  >
                    <Descriptions.Item label="Country">
                      {corporateData.country}
                    </Descriptions.Item>
                    <Descriptions.Item label="City">
                      {corporateData.city}
                    </Descriptions.Item>
                    <Descriptions.Item label="Postal Code">
                      {corporateData.zip}
                    </Descriptions.Item>
                    <Descriptions.Item label="Registeration Number">
                      {corporateData.registerationNo}
                    </Descriptions.Item>

                    <Descriptions.Item label="Active/Not Active">
                      {corporateData.isActive ? (
                        <Tooltip placement="top" title="Active">
                          <Icon
                            type="eye"
                            style={{
                              paddingRight: "5px",
                              fontSize: "20px"
                            }}
                          />
                        </Tooltip>
                      ) : (
                        <Tooltip placement="top" title="Not Active">
                          <Icon
                            type="eye-invisible"
                            style={{
                              paddingRight: "5px",
                              fontSize: "20px"
                            }}
                          />
                        </Tooltip>
                      )}
                    </Descriptions.Item>
                    <Descriptions.Item label="phone No.">
                      {corporateData.phoneNo}
                    </Descriptions.Item>

                    <Descriptions.Item label="Address">
                      {corporateData.address}
                    </Descriptions.Item>
                  </Descriptions>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Provider
                value={{
                  baseApplications: this.props.baseApplications,
                  modules: this.props.modules
                }}
              >
                <ApplicationsPortofoliosListingComponent
                  columns={this.columns}
                  dataSource={this.state.applicationPortoflios}
                  pagination={false}
                  listingType={"Corprate Name Application Portofolio"}
                  onAddApplicationPortofolio={
                    this.props.addApplicationPortofolioToCorporate
                  }
                  onEditApplicationPortofolio={
                    this.props.editApplicationPortofolioToCorporate
                  }
                  baseApplications={this.props.baseApplications}
                  applicationEditedId={this.state.applicationEditedId}
                  resetEditState={this.onResetEditState}
                />
              </Provider>
            </Col>
          </Row>
          <AddCorpoateForm
            title={this.state.modalTitle}
            onCancel={this.onCancelSettingsModal}
            onOk={this.onEditCorporate}
            visible={this.state.showAddCorporateModal}
            ref="addCorporateForm"
          />
        </div>
      </>
    );
  }
}

export const CorporateDetailsScreen = connect(
  CorporateDetailsContainer.mapStatetToProps,
  CorporateDetailsContainer.mapDispatchToProps
)(CorporateDetailsContainer);
