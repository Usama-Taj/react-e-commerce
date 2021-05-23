import AddProduts from "../../pages/admin/AddProducts";
import Customers from "../../pages/admin/Customers";
import Products from "../../pages/admin/Products";
import UpdateProducts from "../../pages/admin/UpdateProducts";
import CustomerIcon from "@material-ui/icons/Group";
import ProductsIcon from "@material-ui/icons/ViewModule";
import AddBoxIcon from "@material-ui/icons/AddBox";
import UpdateIcon from "@material-ui/icons/Update";
import OrdersIcon from "@material-ui/icons/Assignment";
import Orders from "../../pages/admin/Orders";

const dashboardRoutes = () => {
  return [
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
          icon: <AddBoxIcon />,
          path: "/products/add",
        },
        {
          name: "Update Products",
          component: UpdateProducts,
          icon: <UpdateIcon />,
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

export default dashboardRoutes;
