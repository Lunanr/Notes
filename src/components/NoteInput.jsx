import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(() => {
            return{
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return{
                body: event.target.value,
            }
        })
    }

    render(){
        return(
            <form className="note-input">
                <div className="note-input__body">
                    <p className="note-input__title">Buat Catatan</p>
                    <input type="text" placeholder="Ini adalah judul..." />
                    <textarea placeholder="Tuliskan catatanmu disini..."></textarea>
                    <button type="submit">Buat</button>
                </div>
            </form>
        )
    }
}

export default NoteInput;