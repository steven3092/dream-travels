import { Input } from "../../input/input";
import { TextArea } from "../../textarea/textarea";
import "./trip-modal-edit-content.scss";

export const TripModalEditContent = ({
  title,
  description,
  photo_url,
}: {
  title: string;
  description: string;
  photo_url: string;
}) => {
  return (
    <div className="trip-modal-edit-content">
      <label>Name*</label>
      <span className="trip-modal-edit-input">
        <Input
          type="text"
          placeholder="Italy"
          name="name"
          defaultValue={title}
          required={true}
        />
      </span>
      <label>Introduction</label>
      <span className="trip-modal-edit-input">
        <TextArea placeholder="From Rome to Venice..." name="introduction" />
      </span>
      <label>Description</label>
      <span className="trip-modal-edit-input">
        <TextArea
          placeholder="Discover the wonders of the Roman empire..."
          defaultValue={description}
          name="description"
        />
      </span>
      <label>Image</label>
      <span className="trip-modal-edit-input-image">
        <Input
          type="text"
          placeholder="Image URL"
          defaultValue={photo_url}
          name="photo_url"
        />
      </span>
    </div>
  );
};
