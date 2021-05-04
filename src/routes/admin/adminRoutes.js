import Dashboard from "../../pages/admin/Dashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import UserIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import AddProduts from "../../pages/admin/AddProducts";
import Customers from "../../pages/admin/Customers";
import Products from "../../pages/admin/Products";
import UpdateProducts from "../../pages/admin/UpdateProducts";
import CustomerIcon from "@material-ui/icons/Group";
import ProductsIcon from "@material-ui/icons/ViewModule";
import OrdersIcon from "@material-ui/icons/Assignment";
import Orders from "../../pages/admin/Orders";
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
    {
      name: "Customers",
      pagename: "dashboard",
      component: Customers,
      icon: <CustomerIcon />,
      path: "/customers",
    },
    {
      name: "Products",
      pagename: "dashboard",
      component: Products,
      icon: <ProductsIcon />,
      path: "/products",
      nested: [
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
      ],
    },
    {
      name: "Orders",
      pagename: "dashboard",
      component: Orders,
      icon: <OrdersIcon />,
      path: "/orders",
    },
  ];
};

export default adminRoutes;
