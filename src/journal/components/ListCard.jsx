import React from "react";
import { TurnedInNot } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { useMemo } from "react";

export const ListCard = ({
  onSetActive,
  title = "",
  body,
  id,
  imageUrls = [],
  date,
}) => {
  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);

  return (
    <ListItem
      onClick={() => {
        onSetActive({ title, body, id, date, imageUrls });
      }}
      key={id}
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
