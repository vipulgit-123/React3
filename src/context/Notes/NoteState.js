import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  let host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all Notes
  const getNotes = async () => {
    //API calling
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
          "eyJ1c2VyIjp7ImlkIjoiNmFiNTA1ZmRmOGZhOWZkMTMyOGU1NTVhIn0sImlhdCI6MTc5MDI0ODQ0NX0." +
          "vknLNMKf2NdHbWk24ZSzSSdduhUNLYFBKqm63TpQxzo",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a Note
  const addNotes = async (title, description, tag) => {
    // ToDo: Api calling

    console.log("Adding a new note");

    const response = await fetch(`${host}/api/notes/addNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
          "eyJ1c2VyIjp7ImlkIjoiNmFiNTA1ZmRmOGZhOWZkMTMyOGU1NTVhIn0sImlhdCI6MTc5MDI0ODQ0NX0." +
          "vknLNMKf2NdHbWk24ZSzSSdduhUNLYFBKqm63TpQxzo",
      },
      body: JSON.stringify({ title, description, tag }),
      // …
    });

    const data = await response.json();

    console.log("Response:", data);

    if (response.ok) {
      setNotes(notes.concat(data));
    } else {
      console.log("Error:", data);
    }
  };

  //Dlt a Note
  const dltNotes = async (id) => {
    // ToDo: Api calling

    const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
          "eyJ1c2VyIjp7ImlkIjoiNmFiNTA1ZmRmOGZhOWZkMTMyOGU1NTVhIn0sImlhdCI6MTc5MDI0ODQ0NX0." +
          "vknLNMKf2NdHbWk24ZSzSSdduhUNLYFBKqm63TpQxzo",
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const edtNotes = async (id, title, description, tag) => {
    // ToDo: Api calling
    //logic to edit in client, here we use fetch api

    const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
          "eyJ1c2VyIjp7ImlkIjoiNmFiNTA1ZmRmOGZhOWZkMTMyOGU1NTVhIn0sImlhdCI6MTc5MDI0ODQ0NX0." +
          "vknLNMKf2NdHbWk24ZSzSSdduhUNLYFBKqm63TpQxzo",
      },
      body: JSON.stringify({ title, description, tag }),
      // …
    });
    const json = await response.json();

    // here we use for loop
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNotes, dltNotes, edtNotes, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
