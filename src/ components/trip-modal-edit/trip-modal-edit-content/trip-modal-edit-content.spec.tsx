import { render, screen } from "@testing-library/react";
import { TripModalEditContent } from "./trip-modal-edit-content";

const mockProps = {
  title: "Italy",
  description: "Discover the wonders of the Roman empire...",
  photo_url: "some-image-url",
};

describe("TripModalEditContent", () => {
  it("should render TripModalEditContent with initial values", () => {
    render(<TripModalEditContent {...mockProps} />);

    const inputElement = screen.getByPlaceholderText(/Italy/i);
    const textareaDescriptionElement = screen.getByPlaceholderText(
      /Discover the wonders of the Roman empire.../i
    );

    expect(inputElement).toHaveValue(mockProps.title);
    expect(textareaDescriptionElement).toHaveValue(mockProps.description);
  });
});
