import React, { useState } from "react";
import Header from "../../components/specific/admin/Header";
import Sidebar from "../../components/specific/admin/Sidebar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dashboardRoutes from "../../routes/admin/dashboardRoutes";
const useStyles = makeStyles((theme) => ({
  content: {
    [theme.breakpoints.up("sm")]: {
      width: "calc(100% - 240px)",
      marginLeft: 240,
    },
    marginTop: "10vh",
  },
}));
const Dashboard = () => {
  const [displayed, setDisplayed] = useState(false);
  const onDisplay = (display) => {
    setDisplayed(display);
  };
  const routes = dashboardRoutes();
  const classes = useStyles();
  const removeDrawer = () => {
    setDisplayed(false);
  };
  return (
    <Router>
      <React.Fragment>
        <Header onDisplay={onDisplay} />
        <Sidebar display={displayed} closeDrawer={removeDrawer} />
        <main className={classes.content}>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Switch>
        </main>
      </React.Fragment>
    </Router>
  );
};

export default Dashboard;
