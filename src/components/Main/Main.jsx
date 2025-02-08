import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, cards, handleCardClick }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp.F} &deg; F / You may want to wear:
        </p>
        <ul className="cards__list">
          {cards
            .filter((card) => card.weather === weatherData.type)
            .map((filteredCard) => {
              <ItemCard
                key={filteredCard._id}
                card={filteredCard}
                onCardClick={handleCardClick}
              />;
              //structured arguments
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
