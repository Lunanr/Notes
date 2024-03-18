import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <form className="note-input">
                <p className="note-input__title">Buat Catatan</p>
                <input type="text" placeholder="Ini adalah judul ..."/>
                <input type="textarea" placeholder="Tuliskan catatanmu disini ..."/>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NoteInput;