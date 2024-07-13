import { ItineraryDTO } from "../../interfaces/trips.dto.interface";
import "./itinerary-item-mid.scss";

export const ItineraryItemMid = ({
  itinerary,
}: {
  itinerary: ItineraryDTO;
}) => {
  return (
    <div className="itinerary-item-mid">
      <div className="itinerary-item-mid-vertical-line">
        <div className="itinerary-item-mid-point" />
      </div>
      <div className="itinerary-item-mid-content">
        <label className="itinerary-item-mid-itinerary-label">
          Day {itinerary.day} : {itinerary.location}
        </label>
        <div className="itinerary-item-mid-itinerary-description">
          {itinerary.description}
        </div>
      </div>
    </div>
  );
};
