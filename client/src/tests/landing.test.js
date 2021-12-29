import Landing from "../Components/Landing/Landing";
import { screen, render } from "@testing-library/react";

describe("Tests on Landing.jsx component", () => {
  test("should have a button", () => {
    render(<Landing />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
  });

  test("should have a button named as 'Let's Go!'", () => {
    render(<Landing />);
    const btn = screen.getByText(/Let's Go!/i); // i ignora si está en mayusculas o no
    expect(btn).toBeInTheDocument();
  });

  test("should have a heading COUNTRIES", () => {
    render(<Landing />);
    const title = screen.getByText(/countries/i); 
    expect(title).toBeInTheDocument();
  });
});
