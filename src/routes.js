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
import Dashboard from "views/Dashboard.jsx";
import Corporate from "views/Corporates/Corporate.jsx";
import Users from "views/Users/Users.jsx";
import { UserTypesScreen } from "./views/user-types/user-types";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import { UserProfileScreen } from "views/UserProfile/user-profile";
import { DefaultApplicationsScreen } from "./views/default-apps/default-applications-screen";
var routes = [
  {
    path: "/corporates/corporates",
    name: "Corporates",
    icon: "nc-icon nc-bank",
    component: Corporate,
    layout: "/admin"
  },
  {
    path: "/defaultapps",
    name: "Default Applications",
    icon: "nc-icon nc-app",
    component: DefaultApplicationsScreen,
    layout: "/admin"
  },
  {
    path: "/users/users",
    name: "Users",
    icon: "nc-icon nc-single-02",
    component: Users,
    layout: "/admin"
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserProfileScreen,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin"
  }
];
export default routes;
