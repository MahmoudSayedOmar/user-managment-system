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
import { NavLink, Link } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { Menu, Dropdown, Button, Icon } from "antd";
import "./sidebar.css";
var ps;
const { SubMenu } = Menu;
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
    this.sidebar = React.createRef();
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    console.log(this.props.menus.subMenus, "all menu and submenu");
    let menus = [];
    console.log(this.props.menus.subMenus[0].name, "name");
    this.props.menus.subMenus.map(menu =>
      menus.push(
        <Menu
          onClick={this.handleClick}
          // defaultSelectedKeys={["1"]}
          // defaultOpenKeys={[this.props.menus.subMenus[0].name]}
          mode="inline"
          style={{ color: "#fff", backgroundColor: "transparent" }}
        >
          <SubMenu
            key={menu.name}
            title={
              <span>
                <Icon type="mail" />
                <span>{menu.name}</span>
              </span>
            }
          >
            {this.props.routes.map((prop, key) => {
              if (menu.screens.filter(s => s.name === prop.name).length > 0) {
                return (
                  <Menu.Item
                    className="optionsColor"
                    key="1"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Link to={prop.layout + prop.path} className="afooter1">
                      {prop.name}
                    </Link>
                  </Menu.Item>
                );
              }
            })}
          </SubMenu>
        </Menu>
      )
    );

    return (
      <div className="sidebar" data-color="black" data-active-color="info">
        <div className="logo">Medaf Investmenet</div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          {menus}
        </div>
      </div>
    );
  }
}

export default Sidebar;
