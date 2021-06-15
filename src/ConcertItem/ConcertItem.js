import React from 'react';
import { Link } from 'react-router-dom';
import './ConcertItem.css';
import { withRouter } from 'react-router-dom';

class ConcertItem extends React.Component {
    render() {
        return (
            <div className="concert">
                <li>
                    <p>Date: {this.props.concert.date}</p>
                    <p>Artist: {this.props.concert.artist}</p>
                    <p>Venue: {this.props.concert.venue}</p>
                    <p>Favorite songs: {this.props.concert.songs}</p>
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
                </li>  
            </div>
        );
    }
}

export default withRouter(ConcertItem);