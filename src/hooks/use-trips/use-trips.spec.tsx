import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import { TripsDTO } from "../../interfaces/trips.dto.interface";
import { useTrips } from "./use-trips";

const useTripsReducerMock = vitest.fn();

vitest.mock("./use-trips.reducer", () => ({
  useTripsReducer: () => useTripsReducerMock(),
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

describe("useTrips", () => {
  beforeEach(() => {
    useTripsReducerMock.mockReturnValue({
      state: mockTrips,
      dispatch: vi.fn(),
    });
  });

  it("should add a trip", () => {
    const { result } = renderHook(() => useTrips());
    const newTrip: TripsDTO = {
      id: 3,
      title: "Trip 3",
      status: "todo",
      description: "Description 3",
      photo_url: "",
      itinerary: [],
    };

    act(() => {
      result.current.handleAddTrip(newTrip);
    });

    expect(useTripsReducerMock().dispatch).toHaveBeenCalledWith({
      type: "ADD_TRIP",
      trip: newTrip,
    });
  });

  it("should update a trip", () => {
    const { result } = renderHook(() => useTrips());
    const updatedTrip: TripsDTO = { ...mockTrips[0], title: "Updated Trip 1" };

    act(() => {
      result.current.handleUpdateTrip(updatedTrip);
    });

    expect(useTripsReducerMock().dispatch).toHaveBeenCalledWith({
      type: "UPDATE_TRIP",
      trip: updatedTrip,
    });
  });

  it("should search a trip", () => {
    const { result } = renderHook(() => useTrips());
    const searchQuery = "Trip 2";

    act(() => {
      result.current.handleSearchTrip(searchQuery);
    });

    expect(useTripsReducerMock().dispatch).toHaveBeenCalledWith({
      type: "SEARCH_TRIP",
      search: searchQuery,
    });
  });

  it("should delete a trip", () => {
    const { result } = renderHook(() => useTrips());
    const tripId = 1;

    act(() => {
      result.current.handleDeleteTrip(tripId);
    });

    expect(useTripsReducerMock().dispatch).toHaveBeenCalledWith({
      type: "REMOVE_TRIP",
      id: tripId,
    });
  });

  it("should initialize all trips", () => {
    const { result } = renderHook(() => useTrips());

    act(() => {
      result.current.handleAllTrips(mockTrips);
    });

    expect(useTripsReducerMock().dispatch).toHaveBeenCalledWith({
      type: "INITIALIZE",
      trips: mockTrips,
    });
  });

  it("should filter upcoming trips", () => {
    const { result } = renderHook(() => useTrips());

    act(() => {
      result.current.handleUpcomingTrips();
    });

    expect(useTripsReducerMock().dispatch).toHaveBeenCalledWith({
      type: "FILTER_UPCOMING_TRIPS",
    });
  });

  it("should filter completed trips", () => {
    const { result } = renderHook(() => useTrips());
    const status = "completed";

    act(() => {
      result.current.handleCompletedTrips(status);
    });

    expect(useTripsReducerMock().dispatch).toHaveBeenCalledWith({
      type: "FILTER_COMPLETED_TRIPS",
      status,
    });
  });
});
