import React from 'react';
import config from '../config';
import { withRouter } from 'react-router-dom';
import './AddConcertForm.css';

class AddConcertForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            artist: "",
            venue: "",
            songs: "",
            notes: "",
            id: "",
            errorMessage: null
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { date, artist, venue, songs, notes } = e.target;
        const newConcert = { 
            date: date.value, 
            artist: artist.value, 
            venue: venue.value, 
            songs: songs.value, 
            notes: notes.value,
            email: this.props.userInfo.email
        };

        if (newConcert.artist.length === 0) {
            this.setState({
                errorMessage: "Artist is required"
            })
        } else if (newConcert.venue.length === 0) {
            this.setState({
                errorMessage: "Venue is required"
            })
        } else {
            fetch(config.API_BASE_URL + `/api/concerts`, {
                method: 'POST',
                body: JSON.stringify(newConcert),
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => {
                    if(!res.ok) {
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then(result => {
                    this.props.onAddConcert(result)
                    this.props.history.push('/list')
                })
                .catch(error => this.setState({ errorMessage: "Invalid credentials" }))
        }
    }

    render() {
        return (
            <div className="Add-new-concert">
                <h3>Add A New Concert</h3>
                    <form className="add-new-concert-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="date">Date:</label>
                        <input 
                            type="date" 
                            id="date" 
                            name="date"
                            onChange={this.handleChange} 
                        />
                        <br />
                        <label htmlFor="artist">Artist:*</label>
                        <input 
                            type="text" 
                            id="artist" 
                            name="artist" 
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <label htmlFor="venue">Venue:*</label>
                        <input 
                            type="text" 
                            id="venue" 
                            name="venue"
                            onChange={this.handleChange}
                            required 
                        />
                        <br />
                        <label htmlFor="songs">Highlights:</label>
                        <input 
                            type="text" 
                            id="songs" 
                            name="songs" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="notes">Notes:</label>
                        <textarea 
                            id="notes" 
                            name="notes"
                            onChange={this.handleChange}
                        >
                        </textarea>
                        <p><i>*Required fields</i></p>
                        <div className="error-message">{this.state.errorMessage}</div>
                        <button type="submit">Add Concert</button>
                    </form>
            </div>
        );
    }
}

export default withRouter(AddConcertForm);