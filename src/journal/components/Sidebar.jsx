import { Drawer, Typography, Toolbar, Divider, List } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ListCard } from "./ListCard";

export const Sidebar = ({ drawerWidth }) => {
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
            Nicolas Sierra
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {["Enero", "Feberero", "Marzo", "Abril"].map((text, index) => (
            <ListCard key={index} text={text} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
