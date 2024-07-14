import { renderHook, act } from "@testing-library/react";
import { useTripsReducer } from "./use-trips.reducer";
import { TripsDTO } from "../../interfaces/trips.dto.interface";

const useGetTripsMock = vitest.fn();

vitest.mock("../use-get-trips", () => ({
  useGetTrips: () => useGetTripsMock(),
}));

const mockTrips: TripsDTO[] = [
  {
    id: 1,
    title: "Trip 1",
    status: "todo",
    description: "Description 1",
    photo_url: "",
    itinerary: [],
  },
  {
    id: 2,
    title: "Trip 2",
    status: "completed",
    description: "Description 2",
    photo_url: "",
    itinerary: [],
  },
];

describe("useTripsReducer", () => {
  beforeEach(() => {
    useGetTripsMock.mockReturnValue({ trips: mockTrips });
  });

  it("should initialize with trips from useGetTrips", () => {
    const { result } = renderHook(() => useTripsReducer());

    expect(result.current.state).toEqual(mockTrips);
  });

  it("should add a trip", () => {
    const { result } = renderHook(() => useTripsReducer());

    const newTrip: TripsDTO = {
      id: 3,
      title: "Trip 3",
      status: "todo",
      description: "Description 3",
      photo_url: "",
      itinerary: [],
    };

    act(() => {
      result.current.dispatch({ type: "ADD_TRIP", trip: newTrip });
    });

    expect(result.current.state).toContain(newTrip);
  });

  it("should remove a trip", () => {
    const { result } = renderHook(() => useTripsReducer());

    act(() => {
      result.current.dispatch({ type: "REMOVE_TRIP", id: 1 });
    });

    expect(result.current.state).not.toContain(mockTrips[0]);
  });

  it("should update a trip", () => {
    const { result } = renderHook(() => useTripsReducer());

    const updatedTrip: TripsDTO = { ...mockTrips[0], title: "Updated Trip 1" };

    act(() => {
      result.current.dispatch({ type: "UPDATE_TRIP", trip: updatedTrip });
    });

    expect(result.current.state.find((trip) => trip.id === 1)?.title).toBe(
      "Updated Trip 1"
    );
  });

  it("should filter trips based on search", () => {
    const { result } = renderHook(() => useTripsReducer());

    act(() => {
      result.current.dispatch({ type: "SEARCH_TRIP", search: "Trip 2" });
    });

    expect(result.current.state).toEqual([mockTrips[1]]);
  });

  it("should filter completed trips", () => {
    const { result } = renderHook(() => useTripsReducer());

    act(() => {
      result.current.dispatch({
        type: "FILTER_COMPLETED_TRIPS",
        status: "completed",
      });
    });

    expect(result.current.state).toEqual([mockTrips[1]]);
  });
});
