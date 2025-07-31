import { useContext } from "react";
import "./ItemModal.css";
import closeIcon from "../../assets/close.png";
import useModalClose from "../../hooks/useModalClose";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ onClose, card, isOpen, onDelete }) {
  const currentUser = useContext(CurrentUserContext);

  useModalClose(isOpen, onClose);

  if (!card) {
    return null;
  }

  const isOwn = currentUser ? card.owner === currentUser._id : false;

  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="close icon" />
        </button>
        <img src={card.imageUrl} alt="modal image" className="modal__image" />
        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{card?.name}</h2>
            <p className="modal__weather">Weather: {card?.weather}</p>
          </div>

          {isOwn && (
            <button
              className="modal__delete-btn"
              type="button"
              onClick={() => onDelete(card._id)}
              aria-label="Delete Item"
            >
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
