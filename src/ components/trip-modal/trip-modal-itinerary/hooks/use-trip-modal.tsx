import { useState } from "react";
import { ItineraryDTO } from "../../../../interfaces/trips.dto.interface";

export const useTripModalItinerary = () => {
  const [itineraryModal, setItineraryModal] = useState<ItineraryDTO[]>([
    {
      day: "",
      description: "",
      location: "",
    },
  ]);

  const handleOnClickAddItinerary = () => {
    const emptyItinerary = [
      {
        day: "",
        description: "",
        location: "",
      },
    ];

    const addItinerary = itineraryModal.concat(emptyItinerary);

    setItineraryModal(addItinerary);
  };

  return {
    itineraryModal,
    handleOnClickAddItinerary,
  };
};
