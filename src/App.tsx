import { Nav } from "./ components/nav/nav";
import { Button } from "./ components/button/button";
import { TripCard } from "./ components/trip-card/trip-card";
import { TripsDTO } from "./interfaces/trips.dto.interface";
import { useTrips } from "./hooks/use-trips/use-trips";
import { Modal } from "./ components/modal/modal";
import { TripModal } from "./ components/trip-modal/trip-modal";
import { useModal } from "./ components/modal/hooks/use-modal";
import dreamTripIcon from "./assets/dream-trips-icon.svg";
import { ButtonGroup } from "./ components/button-group/button-group";
import { SearchBar } from "./ components/search-bar/search-bar";
import "./App.css";

function App() {
  const { isOpen: isOpenModalCreate, toggleStatus: toggleStatusModalCreate } =
    useModal();

  const {
    handleAddTrip,
    handleUpdateTrip,
    handleSearchTrip,
    handleDeleteTrip,
    handleAllTrips,
    handleCompletedTrips,
    handleUpcomingTrips,
    state,
  } = useTrips();

  const handleOnTripSubmit = (trip: TripsDTO) => {
    handleAddTrip(trip);
    toggleStatusModalCreate();
  };

  const handleOnTripEditSubmit = (trip: TripsDTO) => {
    handleUpdateTrip(trip);
  };

  const handleOnTripChangeStatus = (trip: TripsDTO) => {
    handleUpdateTrip(trip);
  };

  const handleOnTripSearch = (search: string) => {
    handleSearchTrip(search);
  };

  const handleOnDeleteTrip = (id: number) => {
    handleDeleteTrip(id);
  };

  const handleOnClickAllTrips = (trips: TripsDTO[]) => {
    handleAllTrips(trips);
  };

  const handleOnClickUpcomingTrips = () => {
    handleUpcomingTrips();
  };

  const handleOnClickCompletedTrips = (status: string) => {
    handleCompletedTrips(status);
  };

  return (
    <div className="main-view">
      <Nav>
        <img src={dreamTripIcon} alt="dot logo" />
        <Button
          type="button"
          name="Create new trip"
          backgroundColor="white"
          color="black"
          onClick={toggleStatusModalCreate}
        />
      </Nav>
      <SearchBar handleOnTripSearch={handleOnTripSearch} />
      <ButtonGroup
        leftButton="All"
        middleButton="Upcoming"
        rightButton="Completed"
        handleOnClickAllTrips={handleOnClickAllTrips}
        handleOnClickUpcomingTrips={handleOnClickUpcomingTrips}
        handleOnClickCompletedTrips={handleOnClickCompletedTrips}
      />
      {state &&
        state.map((trip, index) => (
          <div key={index}>
            <TripCard
              imageUrl={trip.photo_url}
              title={trip.title}
              description={trip.description}
              itinerary={trip.itinerary}
              id={trip.id}
              handleOnDeleteTrip={handleOnDeleteTrip}
              handleOnTripChangeStatus={handleOnTripChangeStatus}
              handleOnTripEditSubmit={handleOnTripEditSubmit}
            />
          </div>
        ))}
      <Modal isOpen={isOpenModalCreate} toggleStatus={toggleStatusModalCreate}>
        <TripModal onSubmit={handleOnTripSubmit} />
      </Modal>
    </div>
  );
}

export default App;
