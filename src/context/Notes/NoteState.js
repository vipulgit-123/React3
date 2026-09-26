import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    let host ="http://localhost:5000"
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //get all Notes
  const getNotes =  async () =>{
    //API calling
    const response = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
            "eyJ1c2VyIjp7ImlkIjoiNmFiNTA1ZmRmOGZhOWZkMTMyOGU1NTVhIn0sImlhdCI6MTc5MDI0ODQ0NX0." +
            "vknLNMKf2NdHbWk24ZSzSSdduhUNLYFBKqm63TpQxzo",
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }


  //Add a Note
  const addNotes = async (title, description, tag) => {
    // ToDo: Api calling

    console.log("Adding a new note");

     const response = await fetch(`${host}/api/notes/addNotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
              "eyJ1c2VyIjp7ImlkIjoiNmFiNTA1ZmRmOGZhOWZkMTMyOGU1NTVhIn0sImlhdCI6MTc5MDI0ODQ0NX0." +
              "vknLNMKf2NdHbWk24ZSzSSdduhUNLYFBKqm63TpQxzo",
      },
      body: JSON.stringify({title,description,tag}),
      // …
    });

    let note = {
      _id: "6ab50e55cd81fd03f7363317",
      user: "6ab505fdf8fa9fd1328e555a",
      title: title,
      description: description,
      tag: tag,
      date: "1790250581402",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Dlt a Note
  const dltNotes = (id) => {
    // ToDo: Api calling
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
          "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
              "eyJ1c2VyIjp7ImlkIjoiNmFiNTA1ZmRmOGZhOWZkMTMyOGU1NTVhIn0sImlhdCI6MTc5MDI0ODQ0NX0." +
              "vknLNMKf2NdHbWk24ZSzSSdduhUNLYFBKqm63TpQxzo",
      },
      body: JSON.stringify({title,description,tag}),
      // …
    });
    const json = await response.json()

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
    <NoteContext.Provider value={{ notes, addNotes, dltNotes, edtNotes, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
