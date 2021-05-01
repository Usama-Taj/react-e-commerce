import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduts from "../pages/admin/AddProducts";
import Customers from "../pages/admin/Customers";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import UpdateProducts from "../pages/admin/UpdateProducts";
import DashboardIcon from "@material-ui/icons/Dashboard";
import UserIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import Login from "../pages/admin/Login";

const adminRoutes = () => {
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
    {
      name: "Customers",
      component: Customers,
      icon: <DashboardIcon />,
      path: "/customers",
    },
    {
      name: "Products",
      component: Products,
      icon: <DashboardIcon />,
      path: "/products",
    },
    {
      name: "Add Products",
      component: AddProduts,
      icon: <DashboardIcon />,
      path: "/products/add",
    },
    {
      name: "Update Products",
      component: UpdateProducts,
      icon: <DashboardIcon />,
      path: "/products/update",
    },
  ];
};

export default adminRoutes;
