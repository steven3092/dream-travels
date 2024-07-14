import { Input } from "../../input/input";
import { TextArea } from "../../textarea/textarea";
import "./trip-modal-content.scss";

export const TripModalContent = () => {
  return (
    <div className="trip-modal-content">
      <label>Name*</label>
      <span className="trip-modal-input">
        <Input type="text" placeholder="Italy" name="name" required={true} />
      </span>
      <label>Introduction</label>
      <span className="trip-modal-input">
        <TextArea placeholder="From Rome to Venice..." name="Introduction" />
      </span>
      <label>Description</label>
      <span className="trip-modal-input">
        <TextArea
          placeholder="Discover the wonders of the Roman empire..."
          name="description"
        />
      </span>
      <label>Image</label>
      <span className="trip-modal-input-image">
        <Input type="text" placeholder="Image URL" name="photo_url" />
      </span>
    </div>
  );
};
