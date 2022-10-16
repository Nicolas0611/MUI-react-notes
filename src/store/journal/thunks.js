import { doc, collection, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: "hola",
      body: "que tal",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    const res = await setDoc(newDoc, newNote);

    console.log({ newDoc, newNote });
    //dispatch new note

    //dispatch activar nota
  };
};
