import React from "react";
import NoteItem from "./NoteItem";

function NoteList ({notes, onDelete}){
    return(
        <div className="note-list">
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NoteItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    {...note}/>
                ))) : (
                    <p className="note-list__empty-message">Catatan Tidak Tersedia</p>
                )}
        </div>
    )
}

export default NoteList;