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
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";
import { viewUsers, getUserDetails } from "State/Users/action-creator";
import routes from "routes.js";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { tryLogOut } from "../../State/Authorization/action-creator";
import { Icon, Tooltip, Popover } from "antd";
class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
      visibleCorporates: false,
      visibleDefaultApps: false
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.dropdownToggleCorporate = this.dropdownToggleCorporate.bind(this);
    this.dropdownToggleDefaultApps = this.dropdownToggleDefaultApps.bind(this);
    this.sidebarToggle = React.createRef();
  }

  static mapDispatchToProps(dispatch: Dispatch) {
    return bindActionCreators(
      { tryLogOut, viewUsers, getUserDetails },
      dispatch
    );
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropdownToggleDefaultApps(visibility) {
    if (visibility === false) {
      let currentUser = this.props.currentUser;
      let allUsers = this.props.allUsers;

      let userId = allUsers.find(eachUser => {
        return eachUser.email === currentUser.username;
      });
      if (userId) {
        this.props.getUserDetails(userId.id);
      }
    }
    this.setState({
      visibleDefaultApps: !this.state.visibleDefaultApps
    });
  }
  dropdownToggleCorporate(visibility) {
    if (visibility === false) {
      let currentUser = this.props.currentUser;
      let allUsers = this.props.allUsers;

      let userId = allUsers.find(eachUser => {
        return eachUser.email === currentUser.username;
      });
      if (userId) {
        this.props.getUserDetails(userId.id);
      }
    }
    this.setState({
      visibleCorporates: !this.state.visibleCorporates
    });
  }
  getBrand() {
    let brandName = "Corporates";
    routes.map((prop, key) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        brandName = prop.name;
      }
      return null;
    });
    return brandName;
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  }
  componentDidMount() {
    if (this.props.allUsers && this.props.allUsers.length > 0) {
    } else {
      this.props.viewUsers();
    }
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  render() {
    let title = this.props.location.state
      ? this.props.location.state.navTitle
        ? this.props.location.state.navTitle
        : ""
      : "";

    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <span style={{ fontWeight: "bold", fontSize: "25px" }}>
              {title ? title : this.getBrand()}
            </span>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            <Nav navbar>
              <Dropdown
                nav
                isOpen={this.state.visibleCorporates}
                toggle={e =>
                  this.dropdownToggleCorporate(this.state.visibleCorporates)
                }
              >
                <DropdownToggle caret nav>
                  <Icon
                    type="project"
                    style={{
                      paddingRight: "5px",
                      paddingTop: "7px",
                      fontSize: "25px",
                      cursor: "pointer"
                    }}
                  />
                </DropdownToggle>

                <DropdownMenu right>
                  <div style={{ padding: "10px", width: "250px" }}>
                    <div
                      style={{
                        width: "100%",
                        borderBottom: "thin solid #000",
                        paddingBottom: "2px"
                      }}
                    >
                      Companies
                    </div>
                    <div
                      style={{
                        width: "100%",
                        paddingTop: "2px"
                      }}
                    >
                      <ul>
                        {this.props.toEditUserDetails ? (
                          this.props.toEditUserDetails.corporate ? (
                            <li key={this.props.toEditUserDetails.corporate.id}>
                              {this.props.toEditUserDetails.corporate.name}
                            </li>
                          ) : (
                            ""
                          )
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                </DropdownMenu>
              </Dropdown>

              <Dropdown
                nav
                isOpen={this.state.visibleDefaultApps}
                toggle={e =>
                  this.dropdownToggleDefaultApps(this.state.visibleDefaultApps)
                }
              >
                <DropdownToggle caret nav>
                  <Icon
                    type="global"
                    style={{
                      paddingRight: "5px",
                      paddingTop: "7px",
                      fontSize: "25px",
                      cursor: "pointer"
                    }}
                  />
                </DropdownToggle>

                <DropdownMenu right>
                  <div style={{ padding: "10px", width: "250px" }}>
                    <div
                      style={{
                        width: "100%",
                        borderBottom: "thin solid #000",
                        paddingBottom: "2px"
                      }}
                    >
                      Application Portofilios
                    </div>
                    <div
                      style={{
                        width: "100%",
                        paddingTop: "2px"
                      }}
                    >
                      <ul>
                        {this.props.toEditUserDetails
                          ? this.props.toEditUserDetails.applicationPortoflios
                            ? this.props.toEditUserDetails.applicationPortoflios.map(
                                eachApp => {
                                  return (
                                    <li key={eachApp.id}>{eachApp.name}</li>
                                  );
                                }
                              )
                            : ""
                          : ""}
                      </ul>
                    </div>
                  </div>
                </DropdownMenu>
              </Dropdown>
              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={e => this.dropdownToggle(e)}
              >
                <DropdownToggle caret nav>
                  {/* <i className="nc-icon nc-bell-55" /> */}
                  <img
                    alt="..."
                    className="avatar"
                    src={require("assets/img/mike.jpg")}
                  />
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/admin/user-page">
                    <DropdownItem>View Profile</DropdownItem>
                  </Link>

                  <Link
                    to="/logout"
                    onClick={() => {
                      this.props.tryLogOut();
                      // debugger;
                    }}
                  >
                    <DropdownItem>Log Out</DropdownItem>
                  </Link>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.users.toEditUser, "to edit user");
  return {
    allUsers: state.users.users,
    currentUser: state.authorization,
    toEditUserDetails: state.users.toEditUser
    // allCompanies: state.companies.companies
  };
}

export const Header = connect(
  mapStateToProps,
  HeaderComponent.mapDispatchToProps
)(HeaderComponent);
