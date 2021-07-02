import React from 'react';
import ReactDOM from 'react-dom';
import EditConcertForm from './EditConcertForm';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

/*
~~~NOT PASSING~~~
"TypeError: Cannot read property 'date' of undefined"
Might have something to do with the ref
*/

it('renders without crashing', () => {
    
    const testConcerts = [
        {
            "date": "07-02-1997",
            "artist": "Phish",
            "venue": "Amsterdam",
            "songs": "Cities",
            "notes": "Santa Clause is coming to town tease",
            "id": "1",
        },
        {
            "date": "07-01-1997",
            "artist": "Phish",
            "venue": "Amsterdam",
            "songs": "Cities",
            "notes": "Santa Clause is coming to town tease",
            "id": "2"
        }
    ];

    const testEditedConcert = {
            "date": "07-01-1997",
            "artist": "Phish",
            "venue": "Amsterdam",
            "songs": "Cities",
            "notes": "Editing notes",
            "id": "2"
    };

    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <EditConcertForm concerts={testConcerts} concert={testEditedConcert}/>
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});