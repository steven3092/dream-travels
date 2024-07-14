import { renderHook, act } from "@testing-library/react";
import { useTripModalEditItinerary } from "./use-trip-modal-edit-itinerary";

const mockItinerary = [
  { day: "Day 1", description: "Visit Lisbon", location: "Lisbon" },
  { day: "Day 2", description: "Explore Sintra", location: "Sintra" },
];

describe("useTripModalEditItinerary", () => {
  it("should initialize itineraryModalEdit with provided itinerary", () => {
    const { result } = renderHook(() =>
      useTripModalEditItinerary({ itinerary: mockItinerary })
    );

    expect(result.current.itineraryModalEdit).toEqual(mockItinerary);
  });

  it("should add empty itinerary when handleOnClickModalEditAddItinerary is called", () => {
    const { result } = renderHook(() =>
      useTripModalEditItinerary({ itinerary: mockItinerary })
    );

    act(() => {
      result.current.handleOnClickModalEditAddItinerary();
    });

    expect(result.current.itineraryModalEdit).toHaveLength(
      mockItinerary.length + 1
    );
    expect(result.current.itineraryModalEdit[mockItinerary.length]).toEqual({
      day: "",
      description: "",
      location: "",
    });
  });
});
