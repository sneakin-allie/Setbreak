import React from 'react';
import ReactDOM from 'react-dom';
import ConcertItem from './ConcertItem';
import { BrowserRouter } from 'react-router-dom';

/*
~~~NOT PASSING~~~
"TypeError: Cannot read property 'artist' of undefined"
*/

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ConcertItem />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});