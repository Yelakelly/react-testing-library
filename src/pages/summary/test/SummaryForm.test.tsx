import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("checkbox click enables the button", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm order" });
  expect(button).toBeDisabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeInTheDocument();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();

  expect(button).toBeEnabled();
});

test("popover responds to hover", async () => {
  // popover starts but hidden
  render(<SummaryForm />);
  const nullPopover = screen.queryByText(
    /no ice cream will actualy be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actualy be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover dissapears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actualy be delivered/i)
  );
});
