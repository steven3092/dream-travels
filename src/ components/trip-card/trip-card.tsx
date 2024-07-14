import { useModal } from "../modal/hooks/use-modal";
import { Modal } from "../modal/modal";
import { TripModalDetail } from "../trip-modal-detail/trip-modal-detail";
import { ItineraryDTO, TripsDTO } from "../../interfaces/trips.dto.interface";
import { TripModalEdit } from "../trip-modal-edit/trip-modal-edit";
import "./trip-card.scss";

export const TripCard = ({
  photo_url,
  title,
  description,
  itinerary,
  id,
  status,
  handleOnTripChangeStatus,
  handleOnTripEditSubmit,
  handleOnDeleteTrip,
}: {
  photo_url: string;
  title: string;
  description: string;
  itinerary: ItineraryDTO[];
  id: number;
  status: "todo" | "completed";
  handleOnTripChangeStatus: (trip: TripsDTO) => void;
  handleOnTripEditSubmit: (trip: TripsDTO) => void;
  handleOnDeleteTrip: (id: number) => void;
}) => {
  const { isOpen: isOpenModalDetail, toggleStatus: toggleStatusModalDetail } =
    useModal();
  const { isOpen: isOpenModalEdit, toggleStatus: toggleStatusModalEdit } =
    useModal();

  const handleOnCloseModalEdit = () => {
    toggleStatusModalEdit();
  };

  return (
    <>
      <div className="dream-trip-card">
        <img src={photo_url} alt="no image" className="dream-trip-card-image" />
        <div className="dream-trip-card-text-content">
          <h2>{title}</h2>
          <div>{description}</div>
          <div className="dream-trip-card-buttons">
            <button
              type="button"
              className="dream-trip-card-button-action"
              onClick={toggleStatusModalDetail}
            >
              See trips detail
            </button>
            <div className="dream-trip-card-buttons-right">
              <button
                type="button"
                className="dream-trip-card-button-action"
                onClick={toggleStatusModalEdit}
              >
                Edit
              </button>
              <button
                type="button"
                className="dream-trip-card-button-action-delete"
                onClick={() => handleOnDeleteTrip(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenModalDetail} toggleStatus={toggleStatusModalDetail}>
        <TripModalDetail
          photo_url={photo_url}
          title={title}
          description={description}
          itinerary={itinerary}
          id={id}
          status={status}
          handleOnTripChangeStatus={handleOnTripChangeStatus}
        />
      </Modal>
      <Modal isOpen={isOpenModalEdit} toggleStatus={toggleStatusModalEdit}>
        <TripModalEdit
          photo_url={photo_url}
          title={title}
          description={description}
          itinerary={itinerary}
          id={id}
          handleOnTripEditSubmit={handleOnTripEditSubmit}
          handleOnCloseModalEdit={handleOnCloseModalEdit}
        />
      </Modal>
    </>
  );
};
