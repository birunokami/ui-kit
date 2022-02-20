import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should render element with "app-container" testid', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const appElement = screen.getByTestId('app-container');

    expect(appElement).toBeInTheDocument();
  });
});
