import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const initialValues = {
  name: "",
  imageUrl: "",
  weather: "",
};

export default function AddItemModal({ isOpen, onClose, onAddItem }) {
  // const [name, setName] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  // const [weather, setWeather] = useState("");
  const { values, handleChange, setValues } = useForm(initialValues);

  useEffect(() => {
    if (isOpen) {
      setValues(initialValues);
    }
  }, [isOpen, setValues]);

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

  const isValid = values.name && values.imageUrl && values.weather;
  return (
    <ModalWithForm
      title="New Garment"
      buttonText="Add Garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="modal__label">
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
      </label>
      <label className="modal__label">
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
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type;</legend>
        <div>
          <label className="modal__input modal__label_type_radio">
            <input
              id="hot"
              type="radio"
              value="hot"
              name="weather"
              className="modal__radio-input"
              onChange={handleChange}
              checked={values.weather === "hot"}
            />
            Hot
          </label>
        </div>

        <div>
          <label className="modal__input modal__label_type_radio">
            <input
              id="warm"
              type="radio"
              value="warm"
              name="weather"
              className="modal__radio-input"
              onChange={handleChange}
              checked={values.weather === "warm"}
            />
            Warm
          </label>
        </div>

        <div>
          <label className="modal__input modal__label_type_radio">
            <input
              id="cold"
              type="radio"
              value="cold"
              name="weather"
              className="modal__radio-input"
              onChange={handleChange}
              checked={values.weather === "cold"}
            />
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}
