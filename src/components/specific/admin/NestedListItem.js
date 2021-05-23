import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const NestedListItem = (props) => {
  const classes = useStyles();
  return (
    <NavLink
      exact
      to={props.children.path}
      className="custom-nav-item"
      activeStyle={{
        borderLeft: "5px solid #3f51b5",
      }}
    >
      <ListItem button className={classes.nested}>
        <ListItemIcon>{props.children.icon}</ListItemIcon>
        <ListItemText primary={props.children.name} />
      </ListItem>
    </NavLink>
  );
};

export default NestedListItem;
