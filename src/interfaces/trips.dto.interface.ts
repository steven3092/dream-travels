export interface TripsDTO {
  readonly id: number;
  readonly itinerary: ItineraryDTO[];
  readonly description: string;
  readonly photo_url: string;
  readonly status: "todo" | "completed";
  readonly title: string;
}

export interface ItineraryDTO {
  readonly day: string;
  readonly description: string;
  readonly location: string;
}
