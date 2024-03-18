import React from "react";

function ArchiveButton({id, archive}){
    return <button className="note-item__archive-button" onClick={() => archive(id)}>Arsipkan</button>
}

export default ArchiveButton;