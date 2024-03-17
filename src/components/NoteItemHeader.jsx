import React from "react";

function NoteItemHeader ({title,date}){
    return(
        <div className="note-item__content">
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__date">{date}</p>
        </div>
    );
}

export default NoteItemHeader;