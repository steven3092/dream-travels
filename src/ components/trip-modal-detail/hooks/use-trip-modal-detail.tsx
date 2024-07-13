import { FormEvent, useState } from "react";
import {
  ItineraryDTO,
  TripsDTO,
} from "../../../interfaces/trips.dto.interface";

export const useTripModalDetail = ({
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
  const [checked, setChecked] = useState(false);

  const handleOnSubmitModalDetailForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tripUpdatedCompleted: TripsDTO = {
      id: id,
      itinerary: itinerary,
      description: description,
      photo_url: imageUrl,
      status: "completed",
      title: title,
    };

    const tripUpdatedNoCompleted: TripsDTO = {
      id: id,
      itinerary: itinerary,
      description: description,
      photo_url: imageUrl,
      status: "todo",
      title: title,
    };

    setChecked(!checked);
    handleOnTripChangeStatus(
      !checked ? tripUpdatedCompleted : tripUpdatedNoCompleted
    );
  };

  return {
    handleOnSubmitModalDetailForm,
    checked,
  };
};
