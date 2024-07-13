import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const resizeContent = (state: boolean) => {
    const modalElement = document.querySelector(
      "#dream-travels-modal"
    ) as HTMLElement;
    const modalElementContent = document.querySelector(
      "#dream-travels-modal-content"
    ) as HTMLElement;
    if (modalElement && modalElementContent && state) {
      modalElement.style.alignItems = "center";
      modalElementContent.style.maxWidth = "fit-content";
    } else if (modalElement && modalElement.style) {
      modalElement.style.alignItems = "normal";
      modalElementContent.style.maxWidth = "1280px";
    }
  };

  const toggleStatus = () => {
    if (isOpen) {
      resizeContent(false);
    }
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    resizeContent,
    toggleStatus,
  };
};
