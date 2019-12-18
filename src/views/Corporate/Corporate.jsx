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
import { Button, Layout } from "antd";

// core components
import FixedPlugin from "../../components/FixedPlugin/FixedPlugin";
import "./Corporate.css";

class Corporate extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="demo-icons">
                <CardBody className="all-icons">
                  <div className="eachCompnentButtonSection">
                    <div className="buttonRight">
                      <Button type="primary" size="small">
                        Add Corporate
                      </Button>
                    </div>
                  </div>
                  <div className="eachCompnentButtonSection">
                    all company goes here
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <FixedPlugin />
        </div>
      </>
    );
  }
}

export default Corporate;
