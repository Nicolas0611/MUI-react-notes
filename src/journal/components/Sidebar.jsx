import { Drawer, Typography, Toolbar, Divider, List } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
import { ListCard } from "./ListCard";

export const Sidebar = ({ drawerWidth }) => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  const onSetActive = (note) => {
    dispatch(setActiveNote(note));
  };
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {notes.map((note, index) => (
            <ListCard onSetActive={onSetActive} key={index} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
