import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
  afterEach(cleanup);
  
  test('renders learn react link', () => {
    const { debug, getByText } = render(<App />);
    debug();
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
