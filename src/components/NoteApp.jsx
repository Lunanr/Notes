import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import { getInitialData, showFormattedDate } from "../utils/index";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onArchiveHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    render(){
        const formatedNotes = this.state.notes.map((note) => ({...note, createdAt:showFormattedDate(note.createdAt)}))
        return(
            <React.Fragment>
            <div className="note-app__header">
                <h1>Notes</h1>
            </div>
            <NoteInput/>
            <div className="note-app__body">
                <h2>Catatan Aktif</h2>
                <NoteList notes={formatedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
            </div>
            </React.Fragment>  
        );
    }
}

export default NoteApp;