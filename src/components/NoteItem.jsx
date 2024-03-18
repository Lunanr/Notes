import React from "react";
import NoteItemHeader from "./NoteItemHeader";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({title, createdAt, body, id, onDelete, onArchive}){
    return(
        <div className="note-item">
            <NoteItemHeader title={title} createdAt={createdAt} />
            <NotesItemBody body={body} />
            <DeleteButton id={id} onDelete={onDelete}/>
            <ArchiveButton id={id} onArchive={onArchive}/>
        </div>
    );
}

export default NoteItem;