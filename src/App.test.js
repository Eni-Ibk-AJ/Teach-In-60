import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page headline', () => {
  render(<App />);
  const headline = screen.getByText(/Learn Anything in 60 Seconds/i);
  expect(headline).toBeInTheDocument();
});
