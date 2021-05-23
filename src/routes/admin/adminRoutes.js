import Dashboard from "../../pages/admin/Dashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import UserIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import Login from "../../pages/admin/Login";

const adminRoutes = () => {
  return [
    {
      name: "Login",
      pagename: "login",
      component: Login,
      icon: <UserIcon />,
      path: "/",
    },
    {
      name: "Dashboard",
      pagename: "dashboard",
      component: Dashboard,
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
  ];
};

export default adminRoutes;
