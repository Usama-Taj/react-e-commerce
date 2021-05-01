import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/sidebar.css";
import { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import HelpIcon from "@material-ui/icons/Help";
import { NavLink } from "react-router-dom";
import { Hidden } from "@material-ui/core";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.navItems = [
      {
        icon: <DashboardIcon />,
        route: "/",
        text: "Dashboard",
      },
      {
        icon: <PeopleIcon />,
        route: "/customers",
        text: "Customers",
      },
      {
        icon: <ViewModuleIcon />,
        route: "/products",
        text: "Products",
      },
      {
        icon: <HelpIcon />,
        route: "/help",
        text: "Help",
      },
    ];
    this.drawer = (
      <div>
        <List>
          {this.navItems.map((item, index) => {
            return (
              <NavLink
                exact
                to={item.route}
                className="custom-nav-item"
                activeStyle={{
                  borderLeft: "5px solid #3f51b5",
                }}
                key={index}
              >
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    className="custom-nav-text"
                  />
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
  }
  closeDrawer = () => {
    this.props.closeDrawer(false);
  };
  render() {
    return (
      <nav>
        <Hidden smUp>
          <Drawer
            variant="temporary"
            open={this.props.display}
            onClick={this.closeDrawer}
          >
            {this.drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer variant="permanent" open>
            {this.drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default Sidebar;
