import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import "../../vendor/fonts.css";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// import CurrentUserContext from "../contexts/CurrentUserContext";
import { getItems, addItems, removeItem } from "../../utils/api";
import { signin, signup } from "../../utils/auth";
// import { defaultClothingItems } from "../../utils/constants";

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

  const handleRegisterModalSubmit = (registerFormValues) => {
    const { email, password } = registerFormValues;
    signup(registerFormValues)
      .then(() => {
        signin(email, password);
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
      })
      .catch(console.error);
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    return addItems({ name, imageUrl, weather })
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
    // // update the clothingItems array

    // // close the modal
    // closeAllModals();
  };

  //   // 1. get values from the form line64
  //   // 2. make API request to the server to create item  line65
  //   // 3. get response from server .. .then block line65
  //   // 4. render the item you got from server   line66

  const handleConfirmDelete = () => {
    if (selectedCard._id) {
      removeItem(selectedCard._id)
        .then(() => {
          setClothingItems((prevItems) =>
            prevItems.filter((item) => item._id !== selectedCard._id)
          );
          // setIsConfirmationModalOpen(false);
          closeActiveModal();
          // eslint-disable-next-line no-undef
          setItemToDelete(null);
        })
        .catch(console.error);
    }
  };

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
      .then(({ data }) => {
        console.log(data);
        //update clothingItems to be the data that we got back from the server
        setClothingItems(data.reverse());
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
                <ProtectedRoute isAuthenticated={false}>
                  <Profile
                    cards={clothingItems}
                    handleCardClick={handleCardClick}
                    addNew={handleAddClick}
                  ></Profile>
                </ProtectedRoute>
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
          onDelete={() => {
            setActiveModal("delete");
          }}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeActiveModal}
        />
        <DeleteConfirmationModal
          onClose={() => {
            setActiveModal("");
          }}
          onConfirm={handleConfirmDelete}
          delete
          isOpen={activeModal === "delete"}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
};

export default App;

// Notes

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

/* Render <AddItemModal /> and pass it props */

/* // May15 Serge said to render AddItem Modal and comment out ModalWithForm */

/* <ModalWithForm
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
          <label htmlFor="imageUrl" className="modal__label">
            Image{" "}
            <input
              type="text"
              className="modal__input"
              id="imageUrl"
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
        </ModalWithForm> */
