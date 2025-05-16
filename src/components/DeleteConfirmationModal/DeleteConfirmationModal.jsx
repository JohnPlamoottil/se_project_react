import React from "react";
import "./DeleteConfirmationModal.css";
import useModalClose from "../../hooks/useModalClose";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import closeIcon from "../../assets/close.png";

const DeleteConfirmationModal = ({
  activeModal,
  onClose,
  onConfirm,
  isOpen,
}) => {
  useModalClose(isOpen, onClose);
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_confirmation">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={closeIcon} alt="close icon" />
        </button>

        <p className="modal__text modal__confirmation_text">
          Are you sure you want to delete this item? <br />
          This action is irreversible.
        </p>
        <button
          className="modal__confirm-button"
          type="button"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>

        <button
          className="modal__cancel-button"
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
