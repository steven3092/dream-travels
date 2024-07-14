import { render, screen } from "@testing-library/react";
import { TripModalContent } from "./trip-modal-content";

describe("TripModalContent", () => {
  it("renders TripModalContent correctly", () => {
    render(<TripModalContent />);

    expect(screen.getByText("Name*")).toBeInTheDocument();
    expect(screen.getByText("Introduction")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Image")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Italy")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("From Rome to Venice...")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Discover the wonders of the Roman empire...")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Image URL")).toBeInTheDocument();
  });
});
