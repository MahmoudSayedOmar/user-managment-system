import React from "react";
import { connect } from "react-redux";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Table } from "antd";
import { Dispatch, bindActionCreators } from "redux";

import { State } from "../../State/state";
import { tryGetAllDefaultApplications } from "../../State/DefaultApplications/action-creator";

class DefaultApplicationsContainer extends React.Component {
  props: {
    loading: boolean,
    errorMessage: string,
    tryGetAllDefaultApplications: UserLoginModel => void
  };
  UNSAFE_componentWillMount() {
    this.props.tryGetAllDefaultApplications();
  }
  static mapStatetToProps(state: State) {
    return {
      loading: state.defaultApplications.loading,
      errorMessage: state.defaultApplications.errorMessage,
      defaultApplications: state.defaultApplications.defaultApplications
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryGetAllDefaultApplications }, dispatch);
  }
  columns = [
    {
      title: "Application Name",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Basic Application",
      dataIndex: "modulesDefaultApp",
      key: "modulesDefaultApp",
      render: (modulesDefaultApp, row) => (
        <>
          <span>
            {" "}
            {modulesDefaultApp.map((module, index) => (
              <span key={index}>
                {module.title}
                {index === modulesDefaultApp.length - 1 ? ".  " : ", "}
              </span>
            ))}
          </span>
        </>
      )
    }
  ];

  render() {
    return (
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardBody className="all-icons">
                <div className="eachCompnentButtonSection">
                  <Table
                    rowKey="id"
                    dataSource={this.props.defaultApplications}
                    columns={this.columns}
                    pagination={false}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export const DefaultApplicationsScreen = connect(
  DefaultApplicationsContainer.mapStatetToProps,
  DefaultApplicationsContainer.mapDispatchToProps
)(DefaultApplicationsContainer);
