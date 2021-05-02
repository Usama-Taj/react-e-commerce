import AddProduts from "../../pages/admin/AddProducts";
import Customers from "../../pages/admin/Customers";
import Dashboard from "../../pages/admin/Dashboard";
import Products from "../../pages/admin/Products";
import UpdateProducts from "../../pages/admin/UpdateProducts";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CustomerIcon from "@material-ui/icons/Group";
import ProductsIcon from "@material-ui/icons/ViewModule";
import OrdersIcon from "@material-ui/icons/Assignment";
import Orders from "../../pages/admin/Orders";

const dashboardRoutes = () => {
  return [
    {
      name: "Dashboard",
      component: Dashboard,
      icon: <DashboardIcon />,
      path: "/customers",
    },
    {
      name: "Customers",
      component: Customers,
      icon: <CustomerIcon />,
      path: "/customers",
    },
    {
      name: "Products",
      component: Products,
      icon: <ProductsIcon />,
      path: "/products",
    },
    {
      name: "Orders",
      component: Orders,
      icon: <OrdersIcon />,
      path: "/orders",
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

export default dashboardRoutes;
