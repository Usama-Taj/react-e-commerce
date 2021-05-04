import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const NestedListItem = (props) => {
  const classes = useStyles();
  return (
    <ListItem button className={classes.nested}>
      <ListItemIcon>
        <StarBorder />
      </ListItemIcon>
      <ListItemText primary={props.children} />
    </ListItem>
  );
};

export default NestedListItem;
