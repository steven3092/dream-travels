import { useTrips } from "../../hooks/use-trips/use-trips";
import { TripsDTO } from "../../interfaces/trips.dto.interface";
import "./button-group.scss";

export const ButtonGroup = ({
  leftButton,
  middleButton,
  rightButton,
  handleOnClickAllTrips,
  handleOnClickUpcomingTrips,
  handleOnClickCompletedTrips,
}: {
  leftButton: string;
  middleButton: string;
  rightButton: string;
  handleOnClickAllTrips: (trips: TripsDTO[]) => void;
  handleOnClickUpcomingTrips: () => void;
  handleOnClickCompletedTrips: (status: string) => void;
}) => {
  const { state } = useTrips();

  return (
    <div className="button-group">
      <button className="btn" onClick={() => handleOnClickAllTrips(state)}>
        {leftButton}
      </button>
      <button className="btn" onClick={handleOnClickUpcomingTrips}>
        {middleButton}
      </button>
      <button
        className="btn"
        onClick={() => handleOnClickCompletedTrips("completed")}
      >
        {rightButton}
      </button>
    </div>
  );
};
