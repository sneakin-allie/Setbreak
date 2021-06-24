import React from 'react';
import ConcertItem from '../ConcertItem/ConcertItem';
import config from '../config';
import './ConcertList.css';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ConcertList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            concerts: []
        }
    }

    componentDidMount() {
        fetch(config.API_BASE_URL + `/api/concerts/${this.props.userInfo.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then((results) => {
                this.props.onDisplayConcerts(results)
            })
            .catch(error => this.setState({ error }))
    }

    render() {
        return (
            <div className="concerts">
                <h3>Concert Collection</h3>
                <h3>Welcome {this.props.userInfo.firstName}!</h3>
                    <Link 
                        to={{
                            pathname: `/add`
                        }}
                    >   
                            <button 
                                type="button">
                                Add new
                            </button>
                    </Link>
                        <ul className="concert-list">
                            {this.props.concerts.map((concert, i) =>
                                <ConcertItem
                                    key={i}
                                    concert={concert}
                                    onUpdateConcert={this.props.handleUpdateConcert}
                                    onDeleteConcert={this.props.handleDeleteConcert}
                                    concerts={this.state.concerts}
                                    userInfo={this.state.userInfo}
                                />
                            )}
                        </ul>
            </div>
        );
    }
}

export default withRouter(ConcertList);