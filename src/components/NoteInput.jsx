import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            limit : 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        if(this.state.limit >= 0 && event.target.value.length <= 50){
            this.setState(() => {
                return{
                    title : event.target.value,
                    limit : 50 - event.target.value.length,
                }
            });
        }
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
        this.setState(() => {
            return{
                title : '',
                body:'',
                limit: 50,
            }
        });
    }

    render(){
        return(
            <div className="note-input">
                <h2 className="note-input__title">Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa Karakter: {this.state.limit}</p>
                <form className="note-input__body" onSubmit={this.onSubmitChangeEventHandler}>
                    <input type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                    <textarea placeholder="Tuliskan catatanmu disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler} required></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;