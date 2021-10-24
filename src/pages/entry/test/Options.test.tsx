import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Option from "../Options";

test("displays image for each scoop from the server", () => {
  console.log("here");
  render(<Option optionType="scoops" />);
  const scoopImages = screen.getAllByRole("image", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate", "Vanilla"]);
});
