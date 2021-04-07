import React from 'react';
import './ConcertItem.css';

class ConcertItem extends React.Component {
    render() {
        return (
            <div className="concert">
                <li>
                    <p>Date: {this.props.concert.date}</p>
                    <p>Artist: {this.props.concert.artist}</p>
                    <p>Venue: {this.props.concert.venue}</p>
                    <p>Memorable songs: {this.props.concert.songs}</p>
                    <p>Notes: {this.props.concert.notes}</p>
                    <button
                        // onClick={this.props.history.push("/edit")}
                        type="button">
                        Edit
                    </button>
                    <button 
                        onClick={() => this.props.onDeleteConcert(this.props.concert)}
                        type="button">
                        Delete
                    </button>
                </li>  
            </div>
        );
    }
}

export default ConcertItem;