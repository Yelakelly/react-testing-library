// import "@testing-library/jest-dom";
// import { render, screen, fireEvent } from "@testing-library/react";
// import App from "./App";

// test("button has correct initial color", () => {
//   render(<App />);
//   const button = screen.getByRole("button", { name: "Change to blue" });
//   expect(button).toHaveStyle({ backgroundColor: "red" });
// });

// test("button turns blue when clicked", () => {
//   render(<App />);
//   const button = screen.getByRole("button", { name: "Change to blue" });
//   expect(button).toHaveStyle({ backgroundColor: "red" });

//   fireEvent.click(button);
//   expect(button).toHaveStyle({ backgroundColor: "blue" });

//   expect(button.textContent).toBe("Change to red");
// });

// test("initial conditions", () => {
//   render(<App />);
//   // check the button starts out enabled
//   const button = screen.getByRole("button", { name: "Change to blue" });
//   expect(button).toBeEnabled();

//   // check that the checkbox starts out unchecked
//   const input = screen.getByRole("checkbox");
//   expect(input).not.toBeChecked();
// });

// test("when checkbox changed the button turns disabled", () => {
//   render(<App />);
//   // check the button starts out enabled
//   const button = screen.getByRole("button", { name: "Change to blue" });
//   expect(button).toBeEnabled();

//   // check that the checkbox starts out unchecked
//   const input = screen.getByRole("checkbox");
//   fireEvent.click(input);
//   expect(input).toBeChecked();

//   expect(button).not.toBeEnabled();
//   fireEvent.click(input);

//   expect(button).toBeEnabled();
// });

// test("the button changes color when disabled", () => {
//   render(<App />);
//   // check the button starts out enabled
//   const button = screen.getByRole("button", { name: "Change to blue" });
//   const input = screen.getByRole("checkbox");
//   fireEvent.click(input);

//   expect(button).toHaveStyle({ backgroundColor: "gray" });
//   fireEvent.click(input);
//   expect(button).toHaveStyle({ backgroundColor: "red" });
// });
