import React from "react";

function NotesItemBody ({body}){
    return(
        <div className="note-item__body">
            <h3>{body}</h3>
        </div>
    );
}

export default NotesItemBody;