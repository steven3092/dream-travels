import { FormEvent, useState } from "react";
import { ItineraryDTO, TripsDTO } from "../../interfaces/trips.dto.interface";
import checkbox from "../../assets/checkbox.svg";
import checkboxChecked from "../../assets/checkbox-checked.svg";
import { ItineraryItemEnd } from "../itinerary-item/itinerary-item-end";
import { ItineraryItemMid } from "../itinerary-item/itinerary-item-mid";
import { ItineraryItemStart } from "../itinerary-item/itinerary-item-start";
import "./trip-modal-detail.scss";
import { useTripModalDetail } from "./hooks/use-trip-modal-detail";

export const TripModalDetail = ({
  imageUrl,
  title,
  description,
  itinerary,
  id,
  handleOnTripChangeStatus,
}: {
  imageUrl: string;
  title: string;
  description: string;
  id: number;
  handleOnTripChangeStatus: (trip: TripsDTO) => void;
  itinerary: ItineraryDTO[];
}) => {
  const { checked, handleOnSubmitModalDetailForm } = useTripModalDetail({
    imageUrl,
    title,
    description,
    itinerary,
    id,
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
    >
      <img src={imageUrl} alt="no image" className="trip-modal-detail-image" />
      <h2 className="trip-modal-detail-title">{title}</h2>
      <div className="trip-modal-detail-checkbox">
        <div className="checkbox-item">
          <button className="checkbox-item-container" type="submit">
            {checked ? (
              <img src={checkboxChecked} alt="checkbox checked image" />
            ) : (
              <img src={checkbox} alt="checkbox image" />
            )}
          </button>
          <label className="checkbox-item-label">
            {checked ? "Completed" : "Mark as completed"}
          </label>
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
