export interface ModalProps {
  children: JSX.Element;
  isOpen?: boolean;
  toggleStatus: () => void;
  defaultModal?: boolean;
}
