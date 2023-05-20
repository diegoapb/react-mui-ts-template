/**
 * Testing file for the MyComponent component.
 */
import { render, screen } from '@testing-library/react';
import MyComponent from '.';

test('Render MyComponent Component', () => {
  render(<MyComponent />);
  const element = screen.getByText(/MyComponent/i);
  expect(element).toBeInTheDocument();
});
