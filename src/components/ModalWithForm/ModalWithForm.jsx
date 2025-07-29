import "./ModalWithForm.css";
import closeIcon from "../../assets/close.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  onClose,
  isOpen,
  onSubmit,
  isValid,
  altButtonText = null,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="close icon" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button
            type="submit"
            className={`modal__submit ${
              isValid ? "" : "modal__submit_disabled"
            }`}
          >
            {buttonText}
          </button>
          {altButtonText && <button type="button">{altButtonText}</button>}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
