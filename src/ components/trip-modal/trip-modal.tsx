import { Button } from "../button/button";
import "./trip-modal.scss";
import { TripModalItinerary } from "./trip-modal-itinerary/trip-modal-itinerary";
import { TripModalContent } from "./trip-modal-content/trip-modal-content";
import { FormEvent } from "react";
import { ItineraryDTO, TripsDTO } from "../../interfaces/trips.dto.interface";
import { useTripModalItinerary } from "./trip-modal-itinerary/hooks/use-trip-modal-itinerary";

export const TripModal = ({
  onSubmit,
}: {
  onSubmit: (trip: TripsDTO) => void;
}) => {
  const { itineraryModal, handleOnClickAddItinerary } = useTripModalItinerary();

  const handleOnSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const itinerary = itineraryModal.map((_itinerary, index) => ({
      day: formData.get(`select-${index}`),
      description: formData.get(`description-${index}`),
      location: formData.get(`location-${index}`),
    }));

    const newTrip: TripsDTO = {
      id: 7,
      itinerary: itinerary as ItineraryDTO[],
      description: formData.get("description") as string,
      photo_url: formData.get("photo_url") as string,
      status: "todo",
      title: formData.get("name") as string,
    };

    onSubmit(newTrip);
  };

  return (
    <form
      className="trip-modal"
      onSubmit={handleOnSubmitForm}
      id="trip-modal-form"
    >
      <h2 className="trip-modal-title">Create a trip</h2>
      <TripModalContent />
      <TripModalItinerary
        itineraryModal={itineraryModal}
        handleOnClickAddItinerary={handleOnClickAddItinerary}
      />
      <div className="trip-modal-save-button">
        <Button
          type="submit"
          name="Save"
          backgroundColor="black"
          color="white"
        />
      </div>
    </form>
  );
};
