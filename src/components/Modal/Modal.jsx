import closeIcon from "../../assets/images/close-icon.svg";
import "./Modal.css";

function Modal({ isOpen, onClose, icon, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>

      <div className="modal__content">
        <header className="modal__header">
          <div className="modal__title-wrapper">
            {icon && (
              <img src={icon} alt="Modal Icon" className="modal__title-icon" />
            )}
            <h2 className="modal__title">{title}</h2>
          </div>
          <button className="modal__close" onClick={onClose}>
            <img
              src={closeIcon}
              alt="Close Icon"
              className="modal__close-icon"
            />
          </button>
        </header>

        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
