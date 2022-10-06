import React from "react";
import { JournalLayout } from "../Layout/JournalLayout";
import { NothingSelectedView } from "../view/NothingSelectedView";
import { NoteView } from "../view/NoteView";
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NothingSelectedView /> */}
      <NothingSelectedView />
    </JournalLayout>
  );
};

export default JournalPage;
