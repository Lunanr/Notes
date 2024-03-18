import React from "react";
import NoteItemContent from "./NoteItemContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({title, body, createdAt, id, onDelete, archived}){
    return(
        <div className="note-item">
            <NoteItemContent title={title} body={body} createdAt={createdAt}/>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} archived={archived}/>
            </div>
        </div>
    )
}

export default NoteItem;