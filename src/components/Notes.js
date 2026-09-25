import React, { useContext } from "react";
import noteContext from "../context/Notes/noteContext";
import Noteitem from "./Noteitem";
import AddNotes from "./AddNotes";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNotes } = context;
  return (
    <>
      <AddNotes />
      <div className="row my-3">
        <h2> You Note</h2>
        {notes.map((notes) => {
          return <Noteitem key={notes._id} notes={notes} />;
        })}
      </div>
    </>
  );
};

export default Notes;
