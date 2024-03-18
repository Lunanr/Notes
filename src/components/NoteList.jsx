import React from "react";
import NoteItem from "./NoteItem";

function NoteList ({notes, onDelete, onArchive}){
    return(
        <div className="note-list">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    createdAt={note.createdAt}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    {...note}/>
                ))
            ) : (
                <p className="note-list__empty-message">Tidak Ada Catatan.</p>    
            )}
        </div>
    );
}

export default NoteList;