import React from "react";
import { JournalLayout } from "../Layout/JournalLayout";
import { NothingSelectedView } from "../view/NothingSelectedView";
import { NoteView } from "../view/NoteView";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NothingSelectedView />
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fonSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};

export default JournalPage;
