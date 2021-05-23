import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/sidebar.css";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import dashboardRoutes from "../../../routes/admin/dashboardRoutes";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import NestedList from "./NestedList";
import { useState } from "react";

const Sidebar = (props) => {
  const routes = dashboardRoutes();
  const [open, setOpen] = useState(false);
  const closeDrawer = () => {
    props.closeDrawer(false);
  };
  const handleClick = (e) => {
    setOpen(!open);
  };
  const drawer = (
    <div>
      <List>
        {routes.map((item, index) => {
          return (
            item.pagename === "dashboard" && (
              <NavLink
                exact
                to={item.path}
                className="custom-nav-item"
                activeStyle={{
                  borderLeft: "5px solid #3f51b5",
                }}
                key={index}
              >
                <ListItem button onClick={item.nested && handleClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    className="custom-nav-text"
                  />
                  {item.nested ? open ? <ExpandLess /> : <ExpandMore /> : null}
                </ListItem>
                <NestedList open={open}>{item.nested}</NestedList>
              </NavLink>
            )
          );
        })}
      </List>
    </div>
  );

  return (
    <nav>
      <Hidden smUp>
        <Drawer variant="temporary" open={props.display} onClick={closeDrawer}>
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer variant="permanent" open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidebar;
