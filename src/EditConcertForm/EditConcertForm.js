import React from "react";

class EditConcertForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            artist: "",
            venue: "",
            songs: "",
            notes: "",
            id: ""
        }
    }

    handleEditDate = (e) => {
        const updatedDate = e.target.value;
        this.setState({
            date: updatedDate
        })
    }

    handleEditArtist = (e) => {
        const updatedArtist = e.target.value;
        this.setState({
            artist: updatedArtist
        })
    }

    handleEditVenue = (e) => {
        const updatedVenue = e.target.value;
        this.setState({
            venue: updatedVenue
        })
    }

    handleEditSongs = (e) => {
        const updatedSongs = e.target.value;
        this.setState({
            songs: updatedSongs
        })
    }

    handleEditNotes = (e) => {
        const updatedNotes = e.target.value;
        this.setState({
            notes: updatedNotes
        })
    }

    handleEditId = (e) => {
        const updatedId = e.target.value;
        this.setState({
            id: updatedId
        })
    }

    handleUpdate = (e) => {
        e.preventDefault();
        this.props.onEditConcert(this.state)
        this.props.history.push("/list")
    }

    render() {
        return (
            <div className="edit-concert">
                <h3>Edit Concert</h3>
                    <form className="edit-concert-form" onSubmit={(e) => this.handleUpdate(e)}>
                        <label htmlFor="date">Date:</label>
                        <input 
                            type="date" 
                            id="date" 
                            name="date"
                            value={this.state.date}
                            onChange={(e) => this.handleEditDate(e)} 
                        />
                        <br />
                        <label htmlFor="artist">Artist:</label>
                        <input 
                            type="text" 
                            id="artist" 
                            name="artist" 
                            value={this.state.artist}
                            onChange={(e) => this.handleEditArtist(e)}
                        />
                        <br />
                        <label htmlFor="venue">Venue:</label>
                        <input 
                            type="text" 
                            id="venue" 
                            name="venue"
                            value={this.state.venue}
                            onChange={(e) => this.handleEditVenue(e)} 
                        />
                        <br />
                        <label htmlFor="songs">Memorable songs:</label>
                        <input 
                            type="text" 
                            id="songs" 
                            name="songs" 
                            value={this.state.songs}
                            onChange={(e) => this.handleEditSongs(e)}
                        />
                        <br />
                        <label htmlFor="notes">Notes:</label>
                        <textarea 
                            id="notes" 
                            name="notes"
                            value={this.state.notes}
                            onChange={(e) => this.handleEditNotes(e)}
                        >
                        </textarea>
                        <br />
                        <label htmlFor="concert_id">Id:</label>
                        <input 
                            type="text" 
                            id="concertId" 
                            name="concertId" 
                            onChange={(e) => this.handleEditId(e)}
                        />
                        <br />
                        <button type="submit">Update</button>
                    </form>
            </div>
        );
    }
}

export default EditConcertForm;