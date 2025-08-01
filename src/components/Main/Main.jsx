import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, cards, handleCardClick, onCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]}°{" "}
          {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="cards__list">
          {cards
            .filter((card) => card.weather === weatherData.type)
            .map((filteredCard) => {
              return (
                <ItemCard
                  key={filteredCard._id}
                  card={filteredCard}
                  onCardClick={handleCardClick}
                  onCardLike={onCardLike}
                />
              );
              //structured arguments - passed card in as a argument, and then all argument from app.jsx to itemCard
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
