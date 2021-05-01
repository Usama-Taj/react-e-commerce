import React, { useState } from "react";
import Header from "../../components/specific/admin/Header";
import Sidebar from "../../components/specific/admin/Sidebar";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
  const classes = useStyles();
  const removeDrawer = () => {
    setDisplayed(false);
  };
  return (
    <React.Fragment>
      <Header onDisplay={onDisplay} />
      <Sidebar display={displayed} closeDrawer={removeDrawer} />
      <main className={classes.content}></main>
    </React.Fragment>
  );
};

export default Dashboard;
