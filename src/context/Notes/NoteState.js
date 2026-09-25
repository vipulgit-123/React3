import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {

    const  notesInitial  = [
    {
        "_id": "6ab50db9f8fa9fd1328e555c",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "story1",
        "description": "story1",
        "tag": "story1",
        "date": "1790250425283",
        "__v": 0
    },
    {
        "_id": "6ab50e55cd81fd03f7363317",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "story2",
        "description": "story2",
        "tag": "story2",
        "date": "1790250581402",
        "__v": 0
    },
        {
        "_id": "6ab50db9f8fa9fd1328e555c",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "story1",
        "description": "story1",
        "tag": "story1",
        "date": "1790250425283",
        "__v": 0
    },
    {
        "_id": "6ab50e55cd81fd03f7363317",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "story2",
        "description": "story2",
        "tag": "story2",
        "date": "1790250581402",
        "__v": 0
    },
        {
        "_id": "6ab50db9f8fa9fd1328e555c",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "story1",
        "description": "story1",
        "tag": "story1",
        "date": "1790250425283",
        "__v": 0
    },
    {
        "_id": "6ab50e55cd81fd03f7363317",
        "user": "6ab505fdf8fa9fd1328e555a",
        "title": "story2",
        "description": "story2",
        "tag": "story2",
        "date": "1790250581402",
        "__v": 0
    }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState