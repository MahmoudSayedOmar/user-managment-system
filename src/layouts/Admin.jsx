import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";

import { Header } from "components/Navbars/DemoNavbar.jsx";
import { CorporateDetailsScreen } from "../views/CorporateDetails/corporate-details";
import { UserTypesScreen } from "../views/user-types/user-types";
import { UserTypeDetailsScreen } from "../views/UserTypeDetails/user-type-details";

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
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={routes} />
        <div className="main-panel" ref={this.mainPanel}>
          <Header {...this.props} routes={routes} />
          <Switch>
            <Redirect
              path={routes[0].layout}
              exact
              to={routes[0].layout + routes[0].path}
            />
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
            <Route path="/admin/roles" component={UserTypeDetailsScreen} />

            <Route path="/admin/users/types" component={UserTypesScreen} />
            <Route
              path="/admin/corporatedetails"
              component={CorporateDetailsScreen}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeData: state.companies
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
