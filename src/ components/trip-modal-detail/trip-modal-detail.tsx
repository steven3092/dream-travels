import { ItineraryDTO, TripsDTO } from "../../interfaces/trips.dto.interface";
import checkbox from "../../assets/checkbox.svg";
import checkboxChecked from "../../assets/checkbox-checked.svg";
import { ItineraryItemEnd } from "../itinerary-item/itinerary-item-end";
import { ItineraryItemMid } from "../itinerary-item/itinerary-item-mid";
import { ItineraryItemStart } from "../itinerary-item/itinerary-item-start";
import { useTripModalDetail } from "./hooks/use-trip-modal-detail";
import "./trip-modal-detail.scss";

export const TripModalDetail = ({
  photo_url,
  title,
  description,
  itinerary,
  status,
  id,
  handleOnTripChangeStatus,
}: {
  photo_url: string;
  title: string;
  description: string;
  id: number;
  status: "todo" | "completed";
  handleOnTripChangeStatus: (trip: TripsDTO) => void;
  itinerary: ItineraryDTO[];
}) => {
  const { checked, handleOnSubmitModalDetailForm, handleOnClickTripStatus } =
    useTripModalDetail({
      photo_url,
      title,
      description,
      itinerary,
      id,
      status,
      handleOnTripChangeStatus,
    });

  const itineraryLength = itinerary.length;

  const handleItineraries = () => (
    <>
      {itinerary.map((itinerary, index) => {
        if (index === 0) {
          return (
            <div key={index}>
              <ItineraryItemStart itinerary={itinerary} />
            </div>
          );
        }
        if (index > 0 && index < itineraryLength - 1) {
          return (
            <div key={index}>
              <ItineraryItemMid itinerary={itinerary} />
            </div>
          );
        }
        if (index === itineraryLength - 1) {
          return (
            <div key={index}>
              <ItineraryItemEnd itinerary={itinerary} />
            </div>
          );
        }
      })}
    </>
  );
  return (
    <form
      className="trip-modal-detail"
      onSubmit={handleOnSubmitModalDetailForm}
      id="trip-modal-detail-form"
      role="form"
    >
      <img src={photo_url} alt="no image" className="trip-modal-detail-image" />
      <h2 className="trip-modal-detail-title">{title}</h2>
      <div className="trip-modal-detail-checkbox">
        <div className="checkbox-item">
          <button
            className="checkbox-item-container"
            onClick={handleOnClickTripStatus}
            type="submit"
          >
            {checked ? (
              <img src={checkboxChecked} alt="checkbox checked image" />
            ) : (
              <img src={checkbox} alt="checkbox image" />
            )}
          </button>
          <div className="checkbox-item-label">
            <input
              value={checked ? "completed" : "todo"}
              name="status"
              type="hidden"
            />
            {checked ? "Completed" : "Mark as completed"}
          </div>
        </div>
      </div>
      <div className="trip-modal-detail-description">
        {description}CheckboxItem
      </div>
      <hr className="trip-modal-detail-styled-line" />
      <h3 className="trip-modal-detail-itinerary-title">Itinerary</h3>
      <div className="trip-modal-detail-itinerary-container">
        {handleItineraries()}
      </div>
    </form>
  );
};
