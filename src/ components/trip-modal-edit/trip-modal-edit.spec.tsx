import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { TripModalEdit } from "./trip-modal-edit";
import userEvent from "@testing-library/user-event";

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

  it("should call handleOnTripEditSubmit and handleOnCloseModalEdit on form submit", async () => {
    const user = userEvent.setup();
    render(<TripModalEdit {...mockTrip} />);

    await user.type(screen.getByPlaceholderText("Italy"), " Updated Trip");
    expect(screen.getByPlaceholderText("Italy")).toHaveValue(
      "Test Trip Updated Trip"
    );

    await user.type(
      screen.getByPlaceholderText(
        "Discover the wonders of the Roman empire..."
      ),
      " Updated Description"
    );
    expect(
      screen.getByPlaceholderText("Discover the wonders of the Roman empire...")
    ).toHaveValue("Test Description Updated Description");

    await user.click(screen.getByRole("button", { name: /save/i }));

    expect(mockTrip.handleOnTripEditSubmit).toHaveBeenCalledTimes(1);
    expect(mockTrip.handleOnCloseModalEdit).toHaveBeenCalledTimes(1);
  });
});
