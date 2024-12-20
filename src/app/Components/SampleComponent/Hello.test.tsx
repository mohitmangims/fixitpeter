import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';
test('renders a message', () => {
  render(<Hello name="World" />);
  expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
});
