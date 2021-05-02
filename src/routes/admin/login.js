import Dashboard from "../../pages/admin/Dashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import UserIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import Login from "../../pages/admin/Login";

const loginRoutes = () => {
  return [
    {
      name: "Login",
      component: Login,
      icon: <UserIcon />,
      path: "/",
    },
    {
      name: "Dashboard",
      component: Dashboard,
      icon: <DashboardIcon />,
      path: "/dashboard",
    },
  ];
};

export default loginRoutes;
