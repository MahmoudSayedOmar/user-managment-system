import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";

import { Header } from "components/Navbars/DemoNavbar.jsx";
import { CorporateDetailsScreen } from "../views/CorporateDetails/corporate-details";
import { UserTypesScreen } from "../views/user-types/user-types";
import { UserTypeDetailsScreen } from "../views/UserTypeDetails/user-type-details";
import { MenusScreen } from "../views/MenuContainer/Menu-Container";
import { UserProfileScreen } from "../views/UserProfile/user-profile";

import Sidebar from "components/Sidebar/Sidebar.jsx";

import routes from "routes.js";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.mainPanel = React.createRef();
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  render() {
    var _routes = [];
    routes.map(route => {
      if (this.props.screens.filter(s => s.name == route.name).length > 0) {
        _routes.push(route);
      }
    });
    // console.log("MEMEMEMEME", this.props.menus);
    // debugger;
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={_routes}
          menus={this.props.menus}
          screens={this.props.screens}
        />
        <div className="main-panel" ref={this.mainPanel}>
          <Header {...this.props} routes={_routes} />
          <Switch>
            {/* {_routes.length > 0 ? (
              <Redirect
                path={_routes[0].layout}
                exact
                to={_routes[0].layout + _routes[0].path}
              />
            ) : null} */}
            {_routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            {/* <Route path="/admin/roles" component={UserTypeDetailsScreen} />

            <Route path="/admin/users/types" component={UserTypesScreen} />
            <Route
              path="/admin/corporatedetails"
              component={CorporateDetailsScreen}
            />
            <Route path="/admin/menus" component={MenusScreen} /> */}
            <Route path="/" component={UserProfileScreen} />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeData: state.companies,
    screens: state.authorization.screens,
    menus: state.authorization.menus
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      // onShowCompanies //  onInitFunction: mainObject => dispatch(actions.onShowCompnay(mainObject))
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
