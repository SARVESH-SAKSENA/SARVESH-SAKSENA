import Contact from "../Contact"
import "@testing-library/jest-dom";
import { render,screen } from "@testing-library/react";

test("Should render Contact component" , () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should check text accusamus" , () => {
    render(<Contact />);
    

    const text = screen.getByText("Hello Hi");
    expect(text).toBeInTheDocument();
});