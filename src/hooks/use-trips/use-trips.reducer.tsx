import { useEffect, useReducer } from "react";
import { TripsDTO } from "../../interfaces/trips.dto.interface";
import { useGetTrips } from "../use-get-trips";

type UseTripsReducerAction =
  | { type: "ADD_TRIP"; trip: TripsDTO }
  | { type: "REMOVE_TRIP"; id: number }
  | { type: "UPDATE_TRIP"; trip: TripsDTO }
  | { type: "INITIALIZE"; trips: TripsDTO[] }
  | { type: "SEARCH_TRIP"; search: string }
  | { type: "FILTER_ALL_TRIPS"; trips: TripsDTO[] }
  | { type: "FILTER_UPCOMING_TRIPS" }
  | { type: "FILTER_COMPLETED_TRIPS"; status: string };

export const useTripsReducer = () => {
  const { trips } = useGetTrips();

  const tripsReducer = (
    state: TripsDTO[],
    action: UseTripsReducerAction
  ): TripsDTO[] => {
    switch (action.type) {
      case "ADD_TRIP":
        return [...state, action.trip];
      case "REMOVE_TRIP":
        return state.filter((trip) => trip.id !== action.id);
      case "UPDATE_TRIP":
        return state.map((trip) =>
          trip.id === action.trip.id ? action.trip : trip
        );
      case "INITIALIZE":
        return action.trips;
      case "SEARCH_TRIP":
        return state.filter((trip) =>
          Object.values(trip).some((value) =>
            value.toString().toLowerCase().includes(action.search.toLowerCase())
          )
        );
      case "FILTER_UPCOMING_TRIPS":
        return state;
      case "FILTER_COMPLETED_TRIPS":
        return state.filter((trip) => trip.status === action.status);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(tripsReducer, []);

  useEffect(() => {
    if (trips) {
      dispatch({ type: "INITIALIZE", trips: trips });
    }
  }, [trips]);

  return {
    state,
    dispatch,
  };
};
