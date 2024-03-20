import React from "react";
import NotesList from "./NotesList";
import NoteInput from "./NoteInput";
import SearchNotes from "./SearchNotes";
import { getInitialData, showFormattedDate } from "../utils";

class NoteApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({notes});
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
                        archived: false
                    }
                ]
            }
        })
        debugger;
    }

    // Membuat objek baru
    // !note.archived adalah fungsi untuk membalikkan nilai seblumnya
    onArchiveHandler(id){
        const notes = this.state.notes.map(note => note.id === id ? {...note, archived : !note.archived} : note);
        this.setState({notes});
    }

    onSearch(title){
        this.setState(() => {
            return{
                search : title
            }
        })
    }

    render(){
        const {notes, search} = this.state;

        const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()));

        const formattedNotes = filteredNotes.map((note) => ({
            ...note,
            createdAt: showFormattedDate(note.createdAt),
        }));
        const daftarNotes = formattedNotes.filter((note) => {
            return note.archived === false;
        })
        const archivedNotes = formattedNotes.filter((note) => {
            return note.archived === true;
        })
        
        return(
            <div className="note-app">
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <SearchNotes onSearch={this.onSearch}/>
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler}/>
                    <h2>Catatan Kaki</h2>
                    <NotesList notes={daftarNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                    <h2>Arsip</h2>
                    <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
                </div>
            </div>
        )
    }
}

export default NoteApp;