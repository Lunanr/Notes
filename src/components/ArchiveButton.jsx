import React from "react";

function ArchiveButton({id, archived}){
    return <button className="note-item__archive-button" onClick={() => archived(id)}>Arsipkan</button>
}

export default ArchiveButton;