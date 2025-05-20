// import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

export default function AddItemModal({ isOpen, onClose, onAddItem }) {
  // const [name, setName] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  // const [weather, setWeather] = useState("");
  const { values, handleChange, setValues } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleimageUrlChange = (e) => {
  //   setImageUrl(e.target.value);
  // };

  // const handleWeatherChange = (e) => {
  //   setWeather(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValues(values);
    onAddItem(values);
  };
  // const a = (event) => {
  //   event.preventDefault();

  // };

  console.log(values);

  const isValid = name && imageUrl && weather;
  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="clothing-name" className="modal__label">
        Name{" "}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="clothing-name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          value={values.name}
        />
        <span className="modal__error" id="place-name-error" />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image
        <input
          type="text"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          value={values.imageUrl}
          required
          name="imageUrl"
        />
        <span className="modal__error" id="place-link-error" />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type;</legend>
        <div>
          <label htmlFor="hot" className="modal__input modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              value="hot"
              name="weather"
              className="modal__radio-input"
              onChange={handleChange}
            />
            Hot
          </label>
        </div>

        <div>
          <label
            htmlFor="warm"
            className="modal__input modal__label_type_radio"
          >
            <input
              id="warm"
              type="radio"
              value="warm"
              name="weather"
              className="modal__radio-input"
              onChange={handleChange}
            />
            Warm
          </label>
        </div>

        <div>
          <label
            htmlFor="cold"
            className="modal__input modal__label_type_radio"
          >
            <input
              id="cold"
              type="radio"
              value="cold"
              name="weather"
              className="modal__radio-input"
              onChange={handleChange}
            />
            Cold
          </label>
        </div>
      </fieldset>
      <button
        type="submit"
        className={`modal__submit ${isValid ? "" : "modal__submit_disabled"}`}
      >
        Add Garment{" "}
      </button>
    </ModalWithForm>
  );
}
