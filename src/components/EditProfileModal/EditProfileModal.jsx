import { useEffect, useContext, useMemo } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfileModal({ isOpen, onClose, onSaveChanges }) {
  const currentUser = useContext(CurrentUserContext);

  const initialValues = useMemo(
    () => ({
      name: currentUser?.name ?? "",
      avatarURL: currentUser?.avatar ?? "",
    }),
    [currentUser]
  );

  const { values, handleChange, setValues } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveChanges(values);
  };

  useEffect(() => {
    if (isOpen) {
      setValues(initialValues);
    }
  }, [isOpen, setValues, initialValues]);

  const isValid =
    values.email && values.password && values.name && values.avatarURL;
  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save Changes"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name *
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
          required
          name="name"
        />
      </label>
      <label htmlFor="avatarURL" className="modal__label">
        Avatar *
        <input
          type="text"
          className="modal__input"
          id="avatarURL"
          placeholder="Avatar URL"
          onChange={handleChange}
          required
          value={values.avatarURL}
          name="avatarURL"
        />
      </label>
    </ModalWithForm>
  );
}
