import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useGetTrips } from "./use-get-trips";

const mockTrips = [
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

const mockFetchTrips = vi.fn().mockResolvedValue(mockTrips);

vitest.mock("../services/get-trips.service", () => ({
  fetchTrips: () => mockFetchTrips(),
}));

const customWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useGetTrips", () => {
  describe("when there is data", () => {
    it("should return trips data", async () => {
      const { result } = renderHook(() => useGetTrips(), {
        wrapper: customWrapper,
      });

      await waitFor(() => {
        expect(result.current.trips).toStrictEqual([
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
        ]);
      });
    });
  });
});
