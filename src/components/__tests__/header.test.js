import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("Should load header with login button" , () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button" , {name : "Login"});//when have multiple button and want to check login button
    expect(button).toBeInTheDocument();
});

it("Should load header with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "Login" }); 

  fireEvent.click(button);
  const logout = screen.getByRole("button", { name: "Logout" }); 

  expect(logout).toBeInTheDocument();
});