import React from "react";

function ArchiveButton({id, archive, onArchive, onUnarchive}){
    return <button className="note-item__archive-button" onClick={() => (archive ? onUnarchive(id) : onArchive(id))}>
        {archive ? 'Pindahkan' : 'Arsipkan'}
    </button>
}

export default ArchiveButton;