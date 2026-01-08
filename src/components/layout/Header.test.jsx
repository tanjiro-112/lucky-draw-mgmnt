import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with title', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Lucky Draw Management/i);
  expect(titleElement).toBeInTheDocument();
});
