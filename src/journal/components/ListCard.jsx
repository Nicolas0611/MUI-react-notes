import React from "react";
import { TurnedInNot } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
export const ListCard = ({ text }) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={text} />
          <ListItemText
            secondary={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni aperiam "
            }
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
