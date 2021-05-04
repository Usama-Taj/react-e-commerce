import { Collapse, List } from "@material-ui/core";
import NestedListItem from "./NestedListItem";

const NestedList = (props) => {
  return (
    <Collapse in={props.open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {props.children &&
          props.children.map((nestedItem, index) => {
            return (
              <NestedListItem key={index}>{nestedItem.name}</NestedListItem>
            );
          })}
      </List>
    </Collapse>
  );
};

export default NestedList;
