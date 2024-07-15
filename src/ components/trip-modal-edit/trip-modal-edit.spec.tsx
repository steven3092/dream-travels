import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { TripModalEdit } from "./trip-modal-edit";

const mockTrip = {
  photo_url: "test-url",
  title: "Test Trip",
  description: "Test Description",
  itinerary: [
    { day: "1", description: "Day 1 Description", location: "Location 1" },
  ],
  id: 1,
  handleOnTripEditSubmit: vi.fn(),
  handleOnCloseModalEdit: vi.fn(),
};

describe("TripModalEdit", () => {
  it("should render the modal with initial values", () => {
    render(<TripModalEdit {...mockTrip} />);

    expect(screen.getByPlaceholderText("Italy")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("From Rome to Venice...")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Discover the wonders of the Roman empire...")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Image URL")).toBeInTheDocument();
  });

  it("should call handleOnTripEditSubmit and handleOnCloseModalEdit on form submit", () => {
    render(<TripModalEdit {...mockTrip} />);

    fireEvent.input(screen.getByPlaceholderText("Italy"), {
      target: { value: "Updated Trip" },
    });

    fireEvent.input(
      screen.getByPlaceholderText(
        "Discover the wonders of the Roman empire..."
      ),
      {
        target: { value: "Updated Description" },
      }
    );

    fireEvent.input(screen.getByPlaceholderText("Image URL"), {
      target: { value: "updated-url" },
    });

    fireEvent.submit(screen.getByTestId("trip-modal-edit-form"));

    expect(mockTrip.handleOnTripEditSubmit).toHaveBeenCalledTimes(1);
    expect(mockTrip.handleOnCloseModalEdit).toHaveBeenCalledTimes(1);
  });
});
