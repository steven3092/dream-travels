import plus from "../../../assets/plus.svg";
import "./trip-modal-itinerary.scss";
import { ItineraryDTO } from "../../../interfaces/trips.dto.interface";
import { ItineraryInput } from "../../itinerary-input/itinerary-input";

export const TripModalItinerary = ({
  itineraryModal,
  handleOnClickAddItinerary,
}: {
  itineraryModal: ItineraryDTO[];
  handleOnClickAddItinerary: (itinerary: ItineraryDTO[]) => void;
}) => {
  return (
    <div className="trip-modal-itinerary">
      <div className="trip-modal-itinerary-title">
        <label>Day by day itinerary</label>
        <span
          className="plus-button"
          role="button"
          onClick={() => handleOnClickAddItinerary(itineraryModal)}
        >
          <img src={plus} alt="no plus" />
        </span>
      </div>

      {itineraryModal.map((_itinerary, index) => (
        <div key={index} className="trip-modal-itinerary-container">
          <ItineraryInput index={index} />
        </div>
      ))}
    </div>
  );
};
