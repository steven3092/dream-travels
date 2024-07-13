import { ItineraryDTO } from "../../interfaces/trips.dto.interface";
import "./itinerary-item-end.scss";

export const ItineraryItemEnd = ({
  itinerary,
}: {
  itinerary: ItineraryDTO;
}) => {
  return (
    <div className="itinerary-item-end">
      <div className="itinerary-item-end-vertical-line">
        <div className="itinerary-item-end-point" />
      </div>
      <div className="itinerary-item-end-content">
        <label className="itinerary-item-end-itinerary-label">
          Day {itinerary.day} : {itinerary.location}
        </label>
        <div className="itinerary-item-end-itinerary-description">
          {itinerary.description}
        </div>
      </div>
    </div>
  );
};
