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
                                onDeleteConcert={this.props.handleDeleteConcert}
                            />
                        )}
                    </ul>
            </div>
        );
    }
}

ConcertList.defaultProps = {
    // do I need to use defaultProps?
    items: []
}

export default ConcertList;