import React from 'react';
import ReactDOM from 'react-dom';
import EditConcertForm from './EditConcertForm';
import { BrowserRouter, Route } from 'react-router-dom';

it('renders without crashing', () => {
    const testConcerts = [
        {
            "date": "07-02-1997",
            "artist": "Phish",
            "venue": "Amsterdam",
            "songs": "Cities",
            "notes": "Santa Clause is coming to town tease",
            "id": 1,
        },
        {
            "date": "07-01-1997",
            "artist": "Phish",
            "venue": "Amsterdam",
            "songs": "Cities",
            "notes": "Santa Clause is coming to town tease",
            "id": 2
        }
    ];

    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Route path='/edit/:id'>
                <EditConcertForm concerts={testConcerts} />
            </Route> 
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});