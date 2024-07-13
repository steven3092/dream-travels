import { ItineraryDTO } from "../../interfaces/trips.dto.interface";
import "./itinerary-item-start.scss";

export const ItineraryItemStart = ({
  itinerary,
}: {
  itinerary: ItineraryDTO;
}) => {
  return (
    <div className="itinerary-item-start">
      <div className="itinerary-item-start-vertical-line">
        <div className="itinerary-item-start-point" />
      </div>
      <div className="itinerary-item-start-content">
        <label className="itinerary-item-start-itinerary-label">
          Day {itinerary.day} : {itinerary.location}
        </label>
        <div className="itinerary-item-start-itinerary-description">
          {itinerary.description}
        </div>
      </div>
    </div>
  );
};
