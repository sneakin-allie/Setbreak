import React from 'react';
import config from '../config';
import { withRouter } from 'react-router-dom';

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

    render() {
        return (
            <div className="add-new-concert">
                <h3>Add New Concert</h3>
                    <form className="add-new-concert-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="date">Date:</label>
                        <input 
                            type="date" 
                            id="date" 
                            name="date"
                            onChange={this.handleChange} 
                        />
                        <br />
                        <label htmlFor="artist">Artist:</label>
                        <input 
                            type="text" 
                            id="artist" 
                            name="artist" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="venue">Venue:</label>
                        <input 
                            type="text" 
                            id="venue" 
                            name="venue"
                            onChange={this.handleChange} 
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
                        <br />
                        <button type="submit">Add concert</button>
                    </form>
            </div>
        );
    }
}

export default withRouter(AddConcertForm);