import React from "react";

class AddConcertForm extends React.Component {
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

    handleDate = (e) => {
        const newDate = e.target.value;
        this.setState({
            date: newDate
        })
    }

    handleArtist = (e) => {
        const newArtist = e.target.value;
        this.setState({
            artist: newArtist
        })
    }

    handleVenue = (e) => {
        const newVenue = e.target.value;
        this.setState({
            venue: newVenue
        })
    }

    handleSongs = (e) => {
        const newSongs = e.target.value;
        this.setState({
            songs: newSongs
        })
    }

    handleNotes = (e) => {
        const newNotes = e.target.value;
        this.setState({
            notes: newNotes
        })
    }

    // eventually remove this to automatically set an id so the user doesn't have to
    handleId = (e) => {
        const newId = e.target.value;
        this.setState({
            id: newId
        })
    }

    handleSubmitNewConcert = (e) => {
        e.preventDefault();
        this.props.onAddConcert(this.state)
        this.props.history.push("/list")
    }

    render() {
        return (
            <div className="add-new-concert">
                <h3>Add New Concert</h3>
                    <form className="add-new-concert-form" onSubmit={(e) => this.handleSubmitNewConcert(e)}>
                        <label htmlFor="date">Date:</label>
                        <input 
                            type="date" 
                            id="date" 
                            name="date"
                            onChange={(e) => this.handleDate(e)} 
                        />
                        <br />
                        <label htmlFor="artist">Artist:</label>
                        <input 
                            type="text" 
                            id="artist" 
                            name="artist" 
                            onChange={(e) => this.handleArtist(e)}
                        />
                        <br />
                        <label htmlFor="venue">Venue:</label>
                        <input 
                            type="text" 
                            id="venue" 
                            name="venue"
                            onChange={(e) => this.handleVenue(e)} 
                        />
                        <br />
                        <label htmlFor="songs">Songs:</label>
                        <input 
                            type="text" 
                            id="songs" 
                            name="songs" 
                            onChange={(e) => this.handleSongs(e)}
                        />
                        <br />
                        <label htmlFor="notes">Notes:</label>
                        <textarea 
                            id="notes" 
                            name="notes"
                            onChange={(e) => this.handleNotes(e)}
                        >
                        </textarea>
                        <br />
                        <label htmlFor="concert_id">Id:</label>
                        <input 
                            type="text" 
                            id="concertId" 
                            name="concertId" 
                            onChange={(e) => this.handleId(e)}
                        />
                        <br />
                        <button type="submit">Add concert</button>
                    </form>
            </div>
        );
    }
}

export default AddConcertForm;