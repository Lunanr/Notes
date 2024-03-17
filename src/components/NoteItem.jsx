import React from "react";
import NoteItemHeader from "./NoteItemHeader";
import NotesItemBody from "./NotesItemBody";

function NoteItem({title,date,body}){
    return(
        <div className="note-item">
            <NoteItemHeader title={title} date={date} />
            <NotesItemBody body={body} />
        </div>
    );
}

export default NoteItem;