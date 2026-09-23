import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {

    const s1 = {
        "name": "Vipul",
        "class": "11A"
    }

    const [state, setState] = useState(s1)
    const update = () => {
      setTimeout(()=>{
          setState({
              "name":"Vipul Agnihotri",
              "class":"12A"
          })
      },1000);
    }

    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState