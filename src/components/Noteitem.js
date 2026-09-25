import React, { useContext } from "react";
import noteContext from "../context/Notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { dltNotes } = context;
  const { notes } = props;
  return (
    <div className="col-md-2">
      <div className="card my-2">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{notes.title}</h5>
            <button type="button" className="btn btn-link p-0 mx-2"
                    onClick={() => {console.log("BUTTON CLICKED", notes._id); dltNotes(notes._id); }}>
              <i className="fa-solid fa-trash-can"></i>
            </button>

            <i className="fa-solid fa-pen-to-square mx-2"></i>
          </div>
          <p className="card-text">{notes.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
