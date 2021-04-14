import React from "react";

class EditConcertForm extends React.Component {
    constructor(props) {
        super(props);
        this.date = React.createRef();
        this.artist = React.createRef();
        this.venue = React.createRef();
        this.songs = React.createRef();
        this.notes = React.createRef();
        this.id = React.createRef();
    }

    // this handler is working but needs to be completed
    handleSubmitUpdateConcert = (e) => {
        e.preventDefault();
        this.props.onUpdateConcert(this.state)
        this.props.history.push("/list")
    }

    render() {
        const id = this.props.match.params.id;
        const currentConcert = this.props.concerts.find((concert) => {
            if (concert.id == id) {
                return concert;
            }
        })

        return (
            <div className="edit-concert">
                <h3>Edit Concert</h3>
                    <form className="edit-concert-form" onSubmit={(e) => this.handleSubmitUpdateConcert(e)}>
                        <label htmlFor="date">Date:</label>
                        <input 
                            type="date" 
                            id="date" 
                            name="date"
                            defaultValue={currentConcert.date}
                            ref={this.date}
                        />
                        <br />
                        <label htmlFor="artist">Artist:</label>
                        <input 
                            type="text" 
                            id="artist" 
                            name="artist" 
                            defaultValue={currentConcert.artist}
                            ref={this.artist}
                        />
                        <br />
                        <label htmlFor="venue">Venue:</label>
                        <input 
                            type="text" 
                            id="venue" 
                            name="venue"
                            defaultValue={currentConcert.venue}
                            ref={this.venue} 
                        />
                        <br />
                        <label htmlFor="songs">Songs:</label>
                        <input 
                            type="text" 
                            id="songs" 
                            name="songs" 
                            defaultValue={currentConcert.songs}
                            ref={this.songs}
                        />
                        <br />
                        <label htmlFor="notes">Notes:</label>
                        <textarea 
                            id="notes" 
                            name="notes"
                            defaultValue={currentConcert.notes}
                            ref={this.notes}
                        >
                        </textarea>
                        <br />
                        <label htmlFor="concert_id">Id:</label>
                        <input 
                            type="text" 
                            id="concertId" 
                            name="concertId" 
                            defaultValue={currentConcert.id}
                            ref={this.id}
                        />
                        <br />
                        <button type="submit">Update</button>
                    </form>
            </div>
        );
    }
}

export default EditConcertForm;