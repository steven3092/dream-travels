import { useState } from "react";
import { ItineraryDTO } from "../../../../interfaces/trips.dto.interface";

export const useTripModalEditItinerary = ({
  itinerary,
}: {
  itinerary: ItineraryDTO[];
}) => {
  const [itineraryModalEdit, setItineraryModalEdit] =
    useState<ItineraryDTO[]>(itinerary);

  const handleOnClickModalEditAddItinerary = () => {
    const emptyItinerary = [
      {
        day: "",
        description: "",
        location: "",
      },
    ];

    const addItinerary = itineraryModalEdit.concat(emptyItinerary);

    setItineraryModalEdit(addItinerary);
  };

  return {
    itineraryModalEdit,
    handleOnClickModalEditAddItinerary,
  };
};
