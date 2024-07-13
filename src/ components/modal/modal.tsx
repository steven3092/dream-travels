import { createPortal } from "react-dom";
import cross from "../../assets/cross.svg";
import { ModalProps } from "./interfaces/modal.interface";
import "./modal.scss";

export const Modal = ({ children, isOpen, toggleStatus }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div role="dialog" id="dream-travels-modal" className="dream-travels-modal">
      <div
        className="dream-travels-modal-content"
        id="dream-travels-modal-content"
      >
        <span className="dream-travels-modal-close" role="button">
          <img src={cross} alt="no cross" onClick={toggleStatus} />
        </span>
        {children}
      </div>
    </div>,
    document.body
  );
};
