// External imports
import { render, screen } from '@testing-library/react';

// Local imports
import MyPagePage from '.';

test('Render MyPagePage', () => {
  render(<MyPagePage />);
  const element = screen.getByText(/Hello World!/i);
  expect(element).toBeInTheDocument();
});
