import React from 'react';
import ConcertItem from '../ConcertItem/ConcertItem';
import './ConcertList.css';

class ConcertList extends React.Component {
    render() {
        return (
            <div className="concerts">
                <h3>Concert Collection</h3>
                    <ul className="concert-list">
                        {this.props.concerts.map((concert, i) =>
                            <ConcertItem
                                key={i}
                                concert={concert}
                                onDeleteConcert={this.props.onDeleteConcert}
                                onEditConcert={this.props.onEditConcert}
                            />
                        )}
                    </ul>
            </div>
        );
    }
}

export default ConcertList;