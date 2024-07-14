import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TripModalItinerary } from "./trip-modal-itinerary";

const mockItineraryModal = [
  { day: "Day 1", description: "Visit Lisbon", location: "Lisbon" },
  { day: "Day 2", description: "Explore Sintra", location: "Sintra" },
];

const mockHandleOnClickAddItinerary = vi.fn();

describe("TripModalItinerary", () => {
  it("should render the TripModalItinerary component", () => {
    render(
      <TripModalItinerary
        itineraryModal={mockItineraryModal}
        handleOnClickAddItinerary={mockHandleOnClickAddItinerary}
      />
    );
    const itineraryTitleElement = screen.getByText("Day by day itinerary");
    expect(itineraryTitleElement).toBeInTheDocument();

    const plusButtonElement = screen.getByRole("button", { name: /no plus/i });
    expect(plusButtonElement).toBeInTheDocument();
  });

  it("should call handleOnClickAddItinerary when plus button is clicked", async () => {
    render(
      <TripModalItinerary
        itineraryModal={mockItineraryModal}
        handleOnClickAddItinerary={mockHandleOnClickAddItinerary}
      />
    );
    const user = userEvent.setup();

    const plusButtonElement = screen.getByRole("button", { name: /no plus/i });
    await user.click(plusButtonElement);

    expect(mockHandleOnClickAddItinerary).toHaveBeenCalledWith(
      mockItineraryModal
    );
  });
});
