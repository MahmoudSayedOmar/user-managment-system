import React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { tryViewProfile } from "../../State/Authorization/action-creator";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Table
} from "reactstrap";
import { Tag } from "antd";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  props: {
    userProfile: {},
    tryViewProfile: () => {}
  };
  static mapStatetToProps(state: State) {
    return {
      userProfile: state.authorization.userProfile
    };
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators({ tryViewProfile }, dispatch);
  }

  componentWillMount() {
    this.props.tryViewProfile();
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h5 className="title">
                        {this.props.userProfile.userName}
                      </h5>
                    </a>
                    <p className="description">
                      {this.props.userProfile.email}
                    </p>
                  </div>
                  <p className="description text-center">
                    {this.props.userProfile.mobileNumber}
                  </p>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="button-container">
                    <Row>
                      <Col className="ml-auto" lg="6">
                        <h5>
                          Gender <br />
                          <small>{this.props.userProfile.gender}</small>
                        </h5>
                      </Col>

                      <Col className="mr-auto" lg="3">
                        <h5>
                          Age
                          <br />
                          <small>{this.props.userProfile.gender}</small>
                        </h5>
                      </Col>
                    </Row>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">
                    {this.props.userProfile.corporateName}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  {this.props.userProfile.userApplicationPortolios != undefined
                    ? this.props.userProfile.userApplicationPortolios.map(
                        userApplicationPortolio => (
                          <Row>
                            <Col md="12">
                              <label>
                                Application :
                                {userApplicationPortolio.applicationPortolio}
                              </label>
                              <Table striped>
                                <thead>
                                  <tr>
                                    <th>User Type</th>
                                    <th>Roles</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {userApplicationPortolio.userUserTypes.map(
                                    userType => (
                                      <tr>
                                        <td>{userType.userType}</td>
                                        <td>
                                          {userType.roles.map(role => (
                                            <Tag color="blue">{role.role}</Tag>
                                          ))}
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </Table>
                            </Col>
                          </Row>
                        )
                      )
                    : ""}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export const UserProfileScreen = connect(
  User.mapStatetToProps,
  User.mapDispatchToProps
)(User);
