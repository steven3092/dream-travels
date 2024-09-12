import { http, HttpResponse } from "msw";
import { trips } from "./get-trips.mock";

export const handlers = [
  // Intercept "GET https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels" requests...
  http.get(
    "https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels",
    () => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json(trips);
    }
  ),
];
