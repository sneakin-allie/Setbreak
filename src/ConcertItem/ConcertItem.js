import React from 'react';
import { Link } from 'react-router-dom';
import './ConcertItem.css';

class ConcertItem extends React.Component {
    render() {
        return (
            <div className="concert">
                <li>
                    <p>Date: {this.props.concert.date}</p>
                    <p>Artist: {this.props.concert.artist}</p>
                    <p>Venue: {this.props.concert.venue}</p>
                    <p>Songs: {this.props.concert.songs}</p>
                    <p>Notes: {this.props.concert.notes}</p>
                    <Link 
                        to={{
                            pathname: `/edit/${this.props.concert.id}`
                        }}
                    >   
                            <button 
                                type="button">
                                Edit
                            </button>
                    </Link>
                    <button 
                        onClick={() => this.props.onDeleteConcert(this.props.concert)}
                        type="button"
                    >
                        Delete
                    </button>
                </li>  
            </div>
        );
    }
}

export default ConcertItem;