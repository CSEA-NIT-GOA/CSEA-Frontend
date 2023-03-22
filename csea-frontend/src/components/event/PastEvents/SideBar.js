import React from "react";
import List from "@material-ui/core/List";
import ListItemButton from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemIcon } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { styled } from "@mui/material/styles";
const StyledList = styled(List)({
  // selected and (selected + hover) states
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: "red",
    "&, & .MuiListItemIcon-root": {
      color: "pink",
    },
  },
  // hover states
  "& .MuiListItemButton-root:hover": {
    backgroundColor: "orange",
    "&, & .MuiListItemIcon-root": {
      color: "yellow",
    },
  },
});

function Sidebar({ title, date, onSmash }) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor:"black" }}
      className="text-white bg-zinc-900"
    >
      <StyledList>
        <ListItemButton button onClick={onSmash}>
          <ListItemIcon>
            <ImageIcon sx={{color:"white"}} />
          </ListItemIcon>
          <ListItemText
            primary={title}
            secondaryTypographyProps={{ style: { color: "white" } }}
            secondary={date}
            className="text-white"
          />
        </ListItemButton>
      </StyledList>
    </List>
  );
}

export default Sidebar;
