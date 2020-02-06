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
    console.log(this.props, "current user");
    let menus = [];
    // console.log(this.props.menus, "menussss");
    this.props.menus.subMenus.map((menu, index) =>
      menus.push(
        <Menu
          onClick={this.handleClick}
          // defaultSelectedKeys={["1"]}
          defaultOpenKeys={[this.props.menus.subMenus[index].name]}
          mode="inline"
          style={{ color: "#fff", backgroundColor: "transparent" }}
        >
          <SubMenu
            // defaultSelectedKeys={["1"]}
            key={menu ? menu.name : ""}
            title={
              <span>
                <span>{menu ? menu.name : ""}</span>
              </span>
            }
          >
            {this.props.routes.map((prop, key) => {
              // console.log(prop.icon);
              if (menu.screens.filter(s => s.name === prop.name).length > 0) {
                return (
                  <Menu.Item
                    key={key}
                    className="optionsColor"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Link to={prop.layout + prop.path} className="afooter1">
                      <i
                        className={prop.icon}
                        style={{ marginRight: "10px" }}
                      />
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
        <div className="logo">
          {
            <span style={{ fontWeight: "bold" }}>
              {this.props.toEditUserDetails
                ? this.props.toEditUserDetails.corporate
                  ? this.props.toEditUserDetails.corporate.name
                  : ""
                : ""}
            </span>
          }
        </div>
        <div className="sidebar-wrapper" ref={this.sidebar}>
          {menus}
        </div>
      </div>
    );
  }
}

export default Sidebar;
