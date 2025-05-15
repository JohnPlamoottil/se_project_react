import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import "../../vendor/fonts.css";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { getItems } from "../../utils/api";
// import { defaultClothingItems } from "../../utils/constants";
// import { v4 } from "0uuid";

const defaultWeatherData = {
  type: "",
  city: "",
  temp: { F: 999, C: 999 },
  condition: "",
  isDay: false,
};

const App = () => {
  const [weatherData, setWeatherData] = useState(defaultWeatherData);

  // const [weatherData, setWeatherData] = useState({ type: "hot" });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    // debugger;
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const closeAllModals = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    // update the clothingItems array
    setClothingItems([{ name, link: imageUrl, weather }, ...clothingItems]);
    // close the modal
    closeAllModals();
  };

  console.log("hello");

  useEffect(() => {
    console.log("app is running");
    getWeather(coordinates, APIkey)
      .then((data) => {
        console.log(data);
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  // console.log("TEST2:", defaultClothingItems);

  // useEffect(() => {
  //   setClothingItems(defaultClothingItems);
  // console.log("TEST:", clothingItems);
  // }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        console.log(data);
        //update clothingItems to be the data that we got back from the server
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  // passing the properties as objects ^^^

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  cards={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  cards={clothingItems}
                  handleCardClick={handleCardClick}
                ></Profile>
              }
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          onClose={closeActiveModal}
          onAddItem={handleAddItemModalSubmit}
          isOpen={activeModal === "add-garment"}
        />

        <ItemModal
          card={selectedCard || {}}
          onClose={closeActiveModal}
          isOpen={activeModal === "preview"}
        />

        <ModalWithForm
          title="New Garment"
          buttonText="Add Garment"
          onClose={closeActiveModal}
          isOpen={activeModal === "add-garment"}
        >
          <label htmlFor="name" className="modal__label">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageURL" className="modal__label">
            Image{" "}
            <input
              type="text"
              className="modal__input"
              id="imageURL"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type;</legend>
            <label
              htmlFor="hot"
              className="modal__input modal__label_type_radio"
            >
              <input
                id="hot"
                type="radio"
                value="hot"
                name="radio"
                className="modal__radio-input"
              />{" "}
              Hot
            </label>
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
              />{" "}
              Warm
            </label>
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
              />{" "}
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default App;

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
