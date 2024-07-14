import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./button";

describe("Button", () => {
  it("should be rendered with correct text", () => {
    render(
      <Button
        type="button"
        name="Click me"
        backgroundColor="white"
        color="black"
      />
    );
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
