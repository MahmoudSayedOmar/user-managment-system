import React from "react";
import { connect } from "react-redux";
import { State } from "../../State/state";
import { Dispatch, bindActionCreators } from "redux";
import { tryGetAllDefaultApplications } from "../../State/DefaultApplications/action-creator";
import DefaultApplicationsListing from "../../components/DefaultApplicationsListing/default-applications-listing";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Popconfirm, Tooltip, Icon } from "antd";
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
      title: "Sequence",
      dataIndex: "serial",
      key: "serial"
    },
    {
      title: "Application Name",
      dataIndex: "applicationName",
      key: "applicationName"
    },
    {
      title: "Basic Application",
      dataIndex: "basicApplication",
      key: "basicApplication"
    },
    {
      title: "Owner Corprate",
      dataIndex: "ownerCorprate",
      key: "ownerCorprate"
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
                    rowKey="serial"
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
