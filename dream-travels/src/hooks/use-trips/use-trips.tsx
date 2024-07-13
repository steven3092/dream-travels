import { TripsDTO } from "../../interfaces/trips.dto.interface";
import { useTripsReducer } from "./use-trips.reducer";

export const useTrips = () => {
  const { state, dispatch } = useTripsReducer();

  const handleAddTrip = (trip: TripsDTO) => {
    dispatch({ type: "ADD_TRIP", trip: trip });
  };

  const handleUpdateTrip = (trip: TripsDTO) => {
    dispatch({ type: "UPDATE_TRIP", trip: trip });
  };

  const handleSearchTrip = (search: string) => {
    dispatch({ type: "SEARCH_TRIP", search: search });
  };

  const handleDeleteTrip = (id: number) => {
    dispatch({ type: "REMOVE_TRIP", id: id });
  };

  const handleAllTrips = (trips: TripsDTO[]) => {
    dispatch({ type: "INITIALIZE", trips: trips });
  };

  const handleUpcomingTrips = () => {
    dispatch({ type: "FILTER_UPCOMING_TRIPS" });
  };

  const handleCompletedTrips = (status: string) => {
    dispatch({ type: "FILTER_COMPLETED_TRIPS", status: status });
  };

  return {
    handleAddTrip,
    handleUpdateTrip,
    handleSearchTrip,
    handleDeleteTrip,
    handleAllTrips,
    handleUpcomingTrips,
    handleCompletedTrips,
    state,
  };
};
