import { Button } from "../button/button";
import { TripModalEditItinerary } from "./trip-modal-edit-itinerary/trip-modal-edit-itinerary";
import { TripModalEditContent } from "./trip-modal-edit-content/trip-modal-edit-content";
import { FormEvent } from "react";
import { ItineraryDTO, TripsDTO } from "../../interfaces/trips.dto.interface";
import "./trip-modal-edit.scss";
import { useTripModalEditItinerary } from "./trip-modal-edit-itinerary/hooks/use-trip-modal-edit-itinerary";

export const TripModalEdit = ({
  photo_url,
  title,
  description,
  itinerary,
  id,
  handleOnTripEditSubmit,
  handleOnCloseModalEdit,
}: {
  photo_url: string;
  title: string;
  description: string;
  itinerary: ItineraryDTO[];
  id: number;
  handleOnTripEditSubmit: (trip: TripsDTO) => void;
  handleOnCloseModalEdit: () => void;
}) => {
  const { itineraryModalEdit, handleOnClickModalEditAddItinerary } =
    useTripModalEditItinerary({ itinerary });

  const handleOnSubmitModalEditForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const newItinerary = itineraryModalEdit.map((itinerary, index) => ({
      day: formData.get(`select-${index}`),
      description: formData.get(`description-${index}`),
      location: formData.get(`location-${index}`),
    }));

    const newTrip: TripsDTO = {
      id: id,
      itinerary: newItinerary as ItineraryDTO[],
      description: formData.get("description") as string,
      photo_url: formData.get("photo_url") as string,
      status: "todo",
      title: formData.get("name") as string,
    };

    handleOnTripEditSubmit(newTrip);
    handleOnCloseModalEdit();
  };

  return (
    <form
      className="trip-modal-edit"
      onSubmit={handleOnSubmitModalEditForm}
      id="trip-modal-edit-form"
      data-testid="trip-modal-edit-form"
    >
      <h2 className="trip-modal-edit-title">Edit a trip</h2>
      <TripModalEditContent
        title={title}
        description={description}
        photo_url={photo_url}
      />
      <TripModalEditItinerary
        itineraryModalEdit={itineraryModalEdit}
        handleOnClickModalEditAddItinerary={handleOnClickModalEditAddItinerary}
      />
      <div className="trip-modal-edit-save-button">
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
