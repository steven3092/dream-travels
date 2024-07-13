import { ItineraryDTO } from "../../interfaces/trips.dto.interface";
import { Input } from "../input/input";
import { TextArea } from "../textarea/textarea";
import "./itinerary-input.scss";

export const ItineraryInput = ({
  index,
  itinerary,
}: {
  index: number;
  itinerary?: ItineraryDTO | undefined;
}) => {
  return (
    <>
      <div className="itinerary-input-left">
        <select
          className="itinerary-input-dropdown"
          name={`select-${index}`}
          defaultValue={itinerary ? itinerary.day : "Day"}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="itinerary-input-right">
        <div className="itinerary-input-main">
          <Input
            type="text"
            placeholder="Location"
            name={`location-${index}`}
            defaultValue={itinerary && itinerary.location}
          />
        </div>
        <div className="itinerary-input-main">
          <TextArea
            placeholder="Description"
            name={`description-${index}`}
            defaultValue={itinerary && itinerary.description}
          />
        </div>
      </div>
    </>
  );
};
