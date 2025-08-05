import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const initialValues = {
  email: "",
  password: "",
};

export default function LoginModal({
  isOpen,
  onClose,
  onLogin,
  onRegisterClick,
}) {
  const { values, handleChange, setValues } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  useEffect(() => {
    if (isOpen) {
      setValues(initialValues);
    }
  }, [isOpen, setValues]);

  const isValid = values.email && values.password;
  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      altButtonText="or Sign Up"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isValid}
      onAltButtonClick={onRegisterClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          type="email"
          name="email"
          className="modal__input"
          id="login-email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={values.email}
          autoComplete="email"
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          id="login-password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
          required
          name="password"
          autoComplete="current-password"
        />
      </label>
    </ModalWithForm>
  );
}
