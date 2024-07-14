import { FormEvent, useState } from "react";
import {
  ItineraryDTO,
  TripsDTO,
} from "../../../interfaces/trips.dto.interface";

export const useTripModalDetail = ({
  photo_url,
  title,
  description,
  itinerary,
  id,
  status,
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
  const [checked, setChecked] = useState<boolean>(
    status === "todo" ? false : true
  );

  const handleOnSubmitModalDetailForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const tripUpdated: TripsDTO = {
      id: id,
      itinerary: itinerary,
      description: description,
      photo_url: photo_url,
      status: formData.get("status") as "todo" | "completed",
      title: title,
    };

    handleOnTripChangeStatus(tripUpdated);
  };

  const handleOnClickTripStatus = () => {
    setChecked(!checked);
  };

  return {
    handleOnSubmitModalDetailForm,
    handleOnClickTripStatus,
    checked,
  };
};
