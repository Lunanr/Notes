import React from "react";

function NoteItemHeader ({title,createdAt}){
    return(
        <div className="note-item__content">
            <h2 className="note-item__title">{title}</h2>
            <p className="note-item__date">{createdAt}</p>
        </div>
    );
}

export default NoteItemHeader;