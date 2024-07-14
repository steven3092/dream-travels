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
      <SearchBar handleOnTripSearch={handleSearchTrip} />
      <ButtonGroup
        leftButton="All"
        middleButton="Upcoming"
        rightButton="Completed"
        handleOnClickAllTrips={handleAllTrips}
        handleOnClickUpcomingTrips={handleUpcomingTrips}
        handleOnClickCompletedTrips={handleCompletedTrips}
      />
      {state &&
        state.map((trip, index) => (
          <div key={index}>
            <TripCard
              photo_url={trip.photo_url}
              title={trip.title}
              description={trip.description}
              itinerary={trip.itinerary}
              id={trip.id}
              status={trip.status}
              handleOnDeleteTrip={handleDeleteTrip}
              handleOnTripChangeStatus={handleUpdateTrip}
              handleOnTripEditSubmit={handleUpdateTrip}
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
