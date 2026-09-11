import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /syed hassnain abbas/i });
  expect(heading).toBeInTheDocument();
});
