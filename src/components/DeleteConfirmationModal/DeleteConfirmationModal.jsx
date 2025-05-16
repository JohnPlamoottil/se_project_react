import React from "react";
import "./DeleteConfirmationModal.css";
import useModalClose from "../hooks/useModalClose";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

const DeleteConfirmationModal = ({
  activeModal,
  onClose,
  onConfirm,
  isOpen,
}) => {
  useModalClose(isOpen, onClose);
  return (
    <ModalWithForm isOpen={isOpen}>
      <div className="modal__body">
        <p className="modal__text">
          Are you sure you want to delete this item? This action is
          irreversible.
        </p>
      </div>

      <button
        className="modal__confirm-button"
        type="button"
        onClick={onConfirm}
      >
        Yes, delete item
      </button>
      <button className="modal__cancel-button" type="button" onClick={onClose}>
        Cancel
      </button>
    </ModalWithForm>
  );
};

export default DeleteConfirmationModal;
