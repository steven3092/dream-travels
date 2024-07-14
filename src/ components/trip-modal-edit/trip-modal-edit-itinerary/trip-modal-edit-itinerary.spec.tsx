import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TripModalEditItinerary } from "./trip-modal-edit-itinerary";

const mockItineraryModalEdit = [
  { day: "Day 1", description: "Visit Lisbon", location: "Lisbon" },
  { day: "Day 2", description: "Explore Sintra", location: "Sintra" },
];

const mockHandleOnClickModalEditAddItinerary = vitest.fn();

vitest.mock("./hooks/use-trip-modal-edit-itinerary", () => ({
  handleOnClickModalEditAddItinerary: () =>
    mockHandleOnClickModalEditAddItinerary(),
}));

describe("TripModalEditItinerary", () => {
  it("should render the TripModalEditItinerary component", () => {
    render(
      <TripModalEditItinerary
        itineraryModalEdit={mockItineraryModalEdit}
        handleOnClickModalEditAddItinerary={
          mockHandleOnClickModalEditAddItinerary
        }
      />
    );
    const itineraryTitleElement = screen.getByText("Day by day itinerary");
    expect(itineraryTitleElement).toBeInTheDocument();

    const plusButtonElement = screen.getByRole("button", { name: /no plus/i });
    expect(plusButtonElement).toBeInTheDocument();
  });

  it("should call handleOnClickModalEditAddItinerary when plus button is clicked", async () => {
    render(
      <TripModalEditItinerary
        itineraryModalEdit={mockItineraryModalEdit}
        handleOnClickModalEditAddItinerary={
          mockHandleOnClickModalEditAddItinerary
        }
      />
    );
    const user = userEvent.setup();

    const plusButtonElement = screen.getByRole("button", { name: /no plus/i });

    await user.click(plusButtonElement);

    expect(mockHandleOnClickModalEditAddItinerary).toHaveBeenNthCalledWith(
      1,
      mockItineraryModalEdit
    );
  });
});
