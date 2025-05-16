import { useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItemModal({ isOpen, onClose, onAddItem }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleimageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl, weather });
  };
  // const a = (event) => {
  //   event.preventDefault();

  // };

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
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
          onChange={handleNameChange}
          value={name}
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
          onChange={handleimageUrlChange}
          value={imageUrl}
          required
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
              name="radio"
              className="modal__radio-input"
              onChange={handleWeatherChange}
            />
          </label>
          Hot
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
              name="radio"
              className="modal__radio-input"
              onChange={handleWeatherChange}
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
              name="radio"
              className="modal__radio-input"
              onChange={handleWeatherChange}
            />
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}
