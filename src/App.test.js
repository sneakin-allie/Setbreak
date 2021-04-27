import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  let container = document.createElement( 'div' );
  ReactDOM.render( <App  />, container );
  ReactDOM.unmountComponentAtNode( container );
});
