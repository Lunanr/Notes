import React from "react";
import NoteItem from "./NoteItem";

function NotesList ({notes, onDelete, onArchive, onUnarchive}){
    return(
        <div className="notes-list">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    isArchive={note.archived}
                    {...note}/>
                ))) : (
                    <p className="notes-list__empty-message">Catatan Tidak Tersedia</p>
                )}
        </div>
    )
}

export default NotesList;