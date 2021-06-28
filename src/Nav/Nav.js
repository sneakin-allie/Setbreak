import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">
                    Home
                </Link>
                <Link to="/list">
                    Concert Collection
                </Link>
                <Link to="/add">
                    Add New Concert
                </Link>
                <Link to='/'>
                    Log Out
                </Link>
            </div>
        )
    }
}

export default Nav;