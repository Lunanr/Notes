import React from "react";
import NotesList from "./NotesList";
import NoteInput from "./NoteInput";
import { getInitialData, showFormattedDate } from "../utils";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            archivedNotes: [],
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(notes => notes.id !== id);
        const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id);
        this.setState({notes, archivedNotes});
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) => {
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        arhived: false
                    }
                ]
            }
        })
    }

    onArchiveHandler(id){
        const notes = this.state.notes.map(note => {
            if(note.id === id){
                return{
                    ...note, archived:true
                };
            }
            return note;
        });
        const archivedNote = this.state.notes.find(note => note.id === id);
        this.setState(prevState => ({
            notes : notes.filter(note => note.id !== id),
            archivedNotes: [...prevState.archivedNotes, archivedNote]
        }));
    }

    onUnarchiveHandler(id){
        const unarchivedNote = this.state.archivedNotes.find(note => note.id === id);
        const archivedNotes = this.state.archivedNotes.filter(note => note.id !== id);
        this.setState(prevState => ({
            notes: [...prevState.notes, {...unarchivedNote, archived: false}],
            archivedNotes
        }))
    }
    

    render(){
        const formattedNotes = this.state.notes.map((note) => ({
            ...note,
            createdAt: showFormattedDate(note.createdAt),
        }));
        const formattedArchivedNotes = this.state.archivedNotes.map((note) => ({
            ...note,
            createdAt: showFormattedDate(note.createdAt),
        }))
        return(
            <div className="note-app">
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <input placeholder="Masukan catatanmu disini"/>
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler}/>
                    <h2>Catatan Kaki</h2>
                    <NotesList notes={formattedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                    <h2>Arsip</h2>
                    <NotesList notes={formattedArchivedNotes} onDelete={this.onDeleteHandler} onUnarchive={this.onUnarchiveHandler}/>
                </div>
            </div>
        )
    }
}

export default NoteApp;