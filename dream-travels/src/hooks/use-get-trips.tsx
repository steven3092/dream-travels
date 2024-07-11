import { useQuery } from "@tanstack/react-query";
import { fetchTrips } from "../services/get-trips";
// import { UserDTO } from "../../interfaces/users.dto.interface";

export function useGetTrips() {
  const query = useQuery({
    queryKey: ["get-trips"],
    queryFn: () => fetchTrips(),
    retry: 0,
  });

  const trips: any = query.data;
  
  return {
    trips,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}