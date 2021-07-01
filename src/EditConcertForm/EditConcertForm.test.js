import React from 'react';
import ReactDOM from 'react-dom';
import EditConcertForm from './EditConcertForm';
import { BrowserRouter } from 'react-router-dom';

/*
~~~NOT PASSING~~~
"TypeError: Cannot read property 'find' of undefined"
*/

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <EditConcertForm />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});