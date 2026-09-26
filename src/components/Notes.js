import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/Notes/noteContext";
import Noteitem from "./Noteitem";
import AddNotes from "./AddNotes";

const Notes = () => {
  const context = useContext(noteContext);
  const [note, setnote] = useState({id:"", etitle: "", edescription: "", etag: "" });

  const { notes, getNotes, editNotes } = context;

  useEffect(() => {
    getNotes();
  }, []);

  const updateNote = (currentNote) => {
      console.log("Current Note:", currentNote);
  console.log("Current Note ID:", currentNote._id);
    ref.current.click();
    setnote({
        id: currentNote._id,
    etitle: currentNote.title || "",
    edescription: currentNote.description || "",
    etag: currentNote.tag || ""
    });

  };

  const handleClick = async (e) => {
      e.preventDefault();
          console.log("Note before update:", note);
  console.log("ID before update:", note.id);
        await editNotes(
            note.id,
            note.etitle,
            note.edescription,
            note.etag)
      refClose.current.click()
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  const ref = useRef(null);
  const refClose = useRef(null);

  return (
    <>
      <AddNotes />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container my-3">
                <h1>Add a Note</h1>
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      value={note.etitle}
                      aria-describedby="emailHelp"
                      onChange={onChange}
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      value={note.edescription}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                  ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2> You Note</h2>
        {notes.map((notes) => {
          return (
            <Noteitem key={notes._id} updateNotes={updateNote} notes={notes} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
