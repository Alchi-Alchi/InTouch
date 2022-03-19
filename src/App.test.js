import { render, screen } from '@testing-library/react';
import InTouchApp from './App';
import React from 'react';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  const div = document.createElement ('div');
  ReactDOM.render(<InTouchApp />, div);
  ReactDOM.unmountComponentAtNode (div);
});
