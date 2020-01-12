import React from "react";
import * as _ from "lodash";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Icon, Popconfirm, Tooltip, Tag } from "antd";
import { Provider } from "../../context";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import ApplicationsPortofoliosListingComponent from "../../components/application-portofolio/application-portofolio";
import { tryGetAllModules } from "../../State/ExtraModules/action-creator";
import { tryGetAllDefaultApplications } from "../../State/DefaultApplications/action-creator";
import {
  viewCorporateDetails,
  addApplicationPortofolioToCorporate,
  changeApplicationPortofolioActivationStatus
} from "../../State/ApplicationsPortofolio/action-creator";

class CorporateDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  columns = [
    {
      title: "Application Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Base Application",
      dataIndex: "baseAPPId",
      key: "baseAPPId",
      render: row => (
        <span>
          {this.props.baseApplications.find(obj => obj["id"] == row).title}
        </span>
      )
    },
    {
      title: "Extra Modules",
      dataIndex: "extraModules",
      key: "extraModules",
      render: extraModules => (
        <span>
          {" "}
          {_.map(extraModules, module => {
            return <Tag color="blue">{module.module.name}</Tag>;
          })}
        </span>
      )
    },

    {
      title: "Actions",
      dataIndex: "isActive",
      key: "isActive",
      render: (eachKey, row) => (
        <span>
          {console.log(row.isActive)}
          {row.isActive ? (
            <Popconfirm
              title="Are you sure deActivate this application portofolio?"
              onConfirm={() => {
                console.log("row", row);
                console.log("Key", eachKey);

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
                  console.log("row", row);
                  console.log("Key", eachKey);

                  this.props.changeApplicationPortofolioActivationStatus(
                    row.id,
                    true
                  );
                }}
              />
            </Tooltip>
          )}
        </span>
      )
    }
  ];

  static mapStatetToProps(state) {
    return {
      // selectedCompany: state.companies.selectedCompany,
      applicationsPortofolios:
        state.applicationsPortofolios.applicationsPortofolios,
      baseApplications: state.defaultApplications.defaultApplications,
      modules: state.module.modules
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      {
        viewCorporateDetails,
        addApplicationPortofolioToCorporate,
        tryGetAllModules,
        changeApplicationPortofolioActivationStatus,
        tryGetAllDefaultApplications
      },
      dispatch
    );
  }
  componentDidMount() {
    this.props.viewCorporateDetails(this.props.location.state.id);
    this.props.tryGetAllModules();
    this.props.tryGetAllDefaultApplications();
  }

  render() {
    //console.log(this.props);
    console.log("applicationsPortofolios", this.props.applicationsPortofolios);

    return (
      <>
        <div className="content">
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
                  dataSource={this.props.applicationsPortofolios}
                  pagination={false}
                  listingType={"Corprate Name Application Portofolio"}
                  onAddApplicationPortofolio={
                    this.props.addApplicationPortofolioToCorporate
                  }
                />
              </Provider>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export const CorporateDetailsScreen = connect(
  CorporateDetailsContainer.mapStatetToProps,
  CorporateDetailsContainer.mapDispatchToProps
)(CorporateDetailsContainer);
