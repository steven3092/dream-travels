
export async function fetchTrips() {
  const response = await fetch('https://my-json-server.typicode.com/mariosanz92/dream-travels-data/travels');
  const data = await response.json();
  
  const trips = data;

  return trips;
}