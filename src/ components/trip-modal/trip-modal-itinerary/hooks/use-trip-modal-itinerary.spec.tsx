import { renderHook, act } from "@testing-library/react";
import { useTripModalItinerary } from "./use-trip-modal-itinerary";

describe("useTripModalItinerary", () => {
  it("should initialize itineraryModal with one empty itinerary", () => {
    const { result } = renderHook(() => useTripModalItinerary());

    expect(result.current.itineraryModal).toHaveLength(1);
    expect(result.current.itineraryModal[0]).toEqual({
      day: "",
      description: "",
      location: "",
    });
  });

  it("should add an empty itinerary when handleOnClickAddItinerary is called", () => {
    const { result } = renderHook(() => useTripModalItinerary());

    act(() => {
      result.current.handleOnClickAddItinerary();
    });

    expect(result.current.itineraryModal).toHaveLength(2);
    expect(result.current.itineraryModal[1]).toEqual({
      day: "",
      description: "",
      location: "",
    });
  });
});
