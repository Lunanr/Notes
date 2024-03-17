import React from "react";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils/index.js";

function NoteApp(){
    const notes = getInitialData();

    return(
        <NoteList notes={notes}/>
    );
}

export default NoteApp;