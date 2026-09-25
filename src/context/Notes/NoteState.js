import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {

    const  notesInitial  = [
    {
        "_id": "6ab50db9f8fa9fd1328e555c",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 1",
        "description": "This is my story1",
        "tag": "1",
        "date": "1790250425283",
        "__v": 0
    },
     {
        "_id": "6ab50e55cd81fd03f7363317",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 2",
        "description": "This is my story2",
        "tag": "2",
        "date": "1790250581402",
        "__v": 0
    },
        {
        "_id": "6ab50db9f8fa9fd1328e5255c",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 1",
        "description": "This is my story1",
        "tag": "1",
        "date": "1790250425283",
        "__v": 0
    },
    {
        "_id": "6ab50e55cd81fd03f73633317",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 2",
        "description": "This is my story2",
        "tag": "2",
        "date": "1790250581402",
        "__v": 0
    },
      {
        "_id": "6ab50db9f8fa9fd13238e555c",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 1",
        "description": "This is my story1",
        "tag": "1",
        "date": "1790250425283",
        "__v": 0
    },
     {
        "_id": "6ab50e55cd81fd03f73633117",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 2",
        "description": "This is my story2",
        "tag": "2",
        "date": "1790250581402",
        "__v": 0
    }, {
        "_id": "6ab50db9f8fa9fd1328e2555c",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 1",
        "description": "This is my story1",
        "tag": "1",
        "date": "1790250425283",
        "__v": 0
    },
     {
        "_id": "6ab50e55cd81fd03f73613317",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 2",
        "description": "This is my story2",
        "tag": "2",
        "date": "1790250581402",
        "__v": 0
    }, {
        "_id": "6ab50db9f8fa9fd13284e555c",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 1",
        "description": "This is my story1",
        "tag": "1",
        "date": "1790250425283",
        "__v": 0
    },
     {
        "_id": "6ab50e55cd81fd03f73563317",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "Note 2",
        "description": "This is my story2",
        "tag": "2",
        "date": "1790250581402",
        "__v": 0
    }
    ]

    const [notes, setNotes] = useState(notesInitial)

    //Add a Note
    const addNotes =(title,description,tag)=>{
        // ToDo: Api calling

        console.log("Adding a new note")
        let note={
        "_id": "6ab50e55cd81fd03f7363317",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "1790250581402",
        "__v": 0
    }
        setNotes(notes.concat(note))
    }

    //Dlt a Note
    const dltNotes =()=>{

    }

    //Edit a Note
    const edtNotes =()=>{

    }

    return(
        <NoteContext.Provider value={{notes,addNotes, dltNotes, edtNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState