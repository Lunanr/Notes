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
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
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

    onSubmitChangeEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render(){
        return(
            <div className="note-input">
                <form className="note-input__body" onSubmit={this.onSubmitChangeEventHandler}>
                    <h2 className="note-input__title">Buat Catatan</h2>
                    <input type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea placeholder="Tuliskan catatanmu disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;