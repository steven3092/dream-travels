import { useQuery } from "@tanstack/react-query";
import { fetchTrips } from "../services/get-trips.service";
import { TripsDTO } from "../interfaces/trips.dto.interface";

export function useGetTrips() {
  const query = useQuery({
    queryKey: ["get-trips"],
    queryFn: () => fetchTrips(),
    retry: 0,
  });

  const trips: TripsDTO[] = query.data;

  return {
    trips,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
