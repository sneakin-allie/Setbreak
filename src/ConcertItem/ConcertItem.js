import React from 'react';
import { Link } from 'react-router-dom';
import './ConcertItem.css';
import { withRouter } from 'react-router-dom';

class ConcertItem extends React.Component {
    render() {
        return (
            <div className="Concert">
                <li>
                    <p className="Artist">Artist: {this.props.concert.artist}</p>
                    <p>Date: {this.props.concert.date}</p>
                    <p>Venue: {this.props.concert.venue}</p>
                    <p>Highlights: {this.props.concert.songs}</p>
                    <p>Notes: {this.props.concert.notes}</p>
                        <div className="Edit-button-container">   
                            <Link 
                                to={{
                                    pathname: `/edit/${this.props.concert.id}`
                                }}
                            >   
                                    <button 
                                        className="Edit-button"
                                        type="button"
                                    >
                                        Edit
                                    </button>
                            </Link>
                        </div>
                </li>  
            </div>
        );
    }
}

export default withRouter(ConcertItem);