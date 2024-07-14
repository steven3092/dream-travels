import plus from "../../../assets/plus.svg";
import "./trip-modal-edit-itinerary.scss";
import { ItineraryDTO } from "../../../interfaces/trips.dto.interface";
import { ItineraryInput } from "../../itinerary-input/itinerary-input";

export const TripModalEditItinerary = ({
  handleOnClickModalEditAddItinerary,
  itineraryModalEdit,
}: {
  itineraryModalEdit: ItineraryDTO[];
  handleOnClickModalEditAddItinerary: (itinerary: ItineraryDTO[]) => void;
}) => {
  return (
    <div className="trip-modal-edit-itinerary">
      <div className="trip-modal-edit-itinerary-title">
        <label>Day by day itinerary</label>
        <span
          className="plus-button"
          role="button"
          onClick={() => handleOnClickModalEditAddItinerary(itineraryModalEdit)}
        >
          <img src={plus} alt="no plus" />
        </span>
      </div>
      {itineraryModalEdit.map((itinerary, index) => (
        <div key={index} className="trip-modal-edit-itinerary-container">
          <ItineraryInput
            index={index}
            itinerary={itinerary}
            data-testid="itinerary-input"
          />
        </div>
      ))}
    </div>
  );
};
