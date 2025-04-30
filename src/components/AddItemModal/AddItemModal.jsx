import { useState } from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function AddItemModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [imageURL, setImageUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      onClose={onClose}
      isOpen={isOpen}
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
      <label htmlFor="imageURL" className="modal__label">
        Image
        <input
          type="text"
          className="modal__input"
          id="imageURL"
          placeholder="Image URL"
          onChange={handleImageUrlChange}
          value={imageURL}
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
