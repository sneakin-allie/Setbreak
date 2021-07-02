import React from 'react';
import ReactDOM from 'react-dom';
import ConcertList from './ConcertList';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const testUser = {
        "firstName": "Allison",
        "lastName": "Schulman",
        "email": "allison.d.schulman@gmail.com",
        "password": "password123"
    };

    const testConcert = [
        {
            "email":"testemail@email.com",
            "date":"07-02-1997",
            "artist":"Phish",
            "venue":"Amsterdam",
            "songs":"Cities",
            "notes":"Santa Clause is coming to town tease"
        }
    ];

    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ConcertList userInfo={testUser} concerts={testConcert}/>
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});