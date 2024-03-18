import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import { getInitialData, showFormattedDate } from "../utils";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({notes});
    }

    render(){
        const formattedNotes = this.state.notes.map((note) => ({
            ...note,
            createdAt: showFormattedDate(note.createdAt),
        }));
        return(
            <div className="note-app">
                <div className="note-app__header">
                    <h1>Notes</h1>
                </div>
                <div className="note-app__body">
                    {/* <h2>Tambah Catatan</h2> */}
                    <NoteInput/>
                    <h2>Catatan Kaki</h2>
                    <NoteList notes={formattedNotes} onDelete={this.onDeleteHandler}/>
                </div>
            </div>
        )
    }
}

export default NoteApp;