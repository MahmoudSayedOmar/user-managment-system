import React from "react";

import { Card, CardBody, Row, Col } from "reactstrap";
import { Button, Table, Icon, Popconfirm, Tooltip } from "antd";

import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import ApplicationsPortofoliosListingComponent from "../../components/application-portofolio/application-portofolio";

import {
  onAddCorporate,
  onDeactivateCorporate,
  onUpdateCorporate
} from "State/Corporates/action-creator";

class CorporateDetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  mapStateToProps(state) {
    return {};
  }

  mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({}, dispatch);
  }

  render() {
    return (
      <>
        <div className="content">
       
          <Row>          
            <Col md="12">
              <ApplicationsPortofoliosListingComponent
                columns={this.columns}
                dataSource={[]}
                pagination={false}
                listingType={"Corprate Name Application Portofolio"}
                onAddModal={() => {}}
              />
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
