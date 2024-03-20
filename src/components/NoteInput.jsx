import React from "react";

class NoteInput extends React.Component {
  state = {
    title: "",
    body: "",
    limit: 50,
  };

  onTitleChangeEventHandler = (event) => {
    if (this.state.limit >= 0 && event.target.value.length <= 50) {
      this.setState(() => ({
        title: event.target.value,
        limit: 50 - event.target.vaue.length,
      }));
    }
  };

  onBodyChangeEventHandler = (event) => {
    this.setState(() => ({
      body: event.target.value,
    }));
  };

  onSubmitChangeEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => ({
      title: "",
      body: "",
      limit: 50,
    }));
  };

  render() {
    return (
      <div className="note-input">
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter: {this.state.limit}
        </p>
        <form
          className="note-input__body"
          onSubmit={this.onSubmitChangeEventHandler}
        >
          <input
            type="text"
            placeholder="Ini adalah judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <textarea
            placeholder="Tuliskan catatanmu disini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;