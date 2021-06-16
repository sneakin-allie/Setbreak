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
                    Concert List
                </Link>
                <Link to="/add">
                    Add New Concert
                </Link>
            </div>
        )
    }
}

export default Nav;