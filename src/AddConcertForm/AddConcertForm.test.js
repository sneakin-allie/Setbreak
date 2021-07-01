import React from 'react';
import ReactDOM from 'react-dom';
import AddConcertForm from './AddConcertForm';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <AddConcertForm />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});