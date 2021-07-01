import React from 'react';
import ReactDOM from 'react-dom';
import ConcertList from './ConcertList';
import { BrowserRouter } from 'react-router-dom';

/*
~~~NOT PASSING~~~
"TypeError: Cannot read property 'firstName' of undefined"
*/

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ConcertList />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});