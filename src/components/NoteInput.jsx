import React from "react";

class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            body: '',
            maxRemainingTitleChars:50,
            remainingTitleChars: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        const title = event.target.value;
        const remainingTitleChars = this.state.maxRemainingTitleChars - title.length;
        if(remainingTitleChars >= 0){
            this.setState(() => {
                return{
                    title: title,
                    remainingTitleChars: remainingTitleChars
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
        this.props.addNote({
            title: this.state.title,
            body: this.state.body,
        });
        this.setState({
            title: '',
            remainingTitleChars: this.state.maxRemainingTitleChars,
        });
    }

    render(){
        return(
            <div className="note-input">
                <h2 className="note-input__title">Buat Catatan</h2>
                <p className="note-input__title__char-limit">Sisa Karakter: {this.state.remainingTitleChars}</p>
                <form className="note-input__body" onSubmit={this.onSubmitChangeEventHandler}>
                    <input type="text" placeholder="Ini adalah judul..." value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea placeholder="Tuliskan catatanmu disini..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;