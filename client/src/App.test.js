import { render, screen } from '@testing-library/react';
import Navbar from "./Components/Navbar/Navbar"

test('Navbar must have an add activity button', () => {
  render(<Navbar />);
  // const btnAddActivity = screen.getByText(/learn react/i);
  const btnAddActivity = screen.getByText(/add activity/);
  expect(btnAddActivity).toBeInTheDocument();
});
