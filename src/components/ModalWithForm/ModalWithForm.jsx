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
  onAltButtonClick,
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
          <div className="modal__buttons">
            <button
              type="submit"
              className={`modal__submit ${
                isValid ? "" : "modal__submit_disabled"
              }`}
            >
              {buttonText}
            </button>
            {altButtonText && (
              <button className="modal__alt" onClick={onAltButtonClick}>
                {altButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
