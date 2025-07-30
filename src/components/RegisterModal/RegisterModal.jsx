import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const initialValues = {
  email: "",
  password: "",
  name: "",
  avatarURL: "",
};

export default function RegisterModal({
  isOpen,
  onClose,
  onRegister,
  onLoginClick,
}) {
  const { values, handleChange, setValues } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  useEffect(() => {
    if (isOpen) {
      setValues(initialValues);
    }
  }, [isOpen, setValues]);

  const isValid =
    values.email && values.password && values.name && values.avatarURL;
  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign Up"
      altButtonText="or Log In"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isValid}
      onAltButtonClick={onLoginClick}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          type="email"
          name="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          required
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          value={values.email}
        />
        <span className="modal__error" id="place-name-error" />
      </label>
      <label htmlFor="password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="password"
          minLength="8"
          maxLength="30"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
          required
          name="password"
        />
      </label>
      <label htmlFor="name" className="modal__label">
        Name*
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
        Avatar URL*
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
