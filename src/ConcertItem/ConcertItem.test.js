import React from 'react';
import ReactDOM from 'react-dom';
import ConcertItem from './ConcertItem';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const testConcert = {
        "email":"testemail@email.com",
        "date":"07-02-1997",
        "artist":"Phish",
        "venue":"Amsterdam",
        "songs":"Cities",
        "notes":"Santa Clause is coming to town tease"
    };

    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ConcertItem concert={testConcert} />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});