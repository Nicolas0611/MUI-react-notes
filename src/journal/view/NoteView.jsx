import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";

import { ImageGallery } from "../components/ImageGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useMemo, useEffect } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNotes } from "../../store/journal/thunks";

export const NoteView = () => {
  const dispatch = useDispatch();

  const { activeNote } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSaveNotes());
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light" sx={{ mb: 2 }}>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button onClick={onSaveNote} color="primary" sx={{ padding: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: "none", mb: 3 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Ingrese el parrafo aquí"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
