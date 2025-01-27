import "./WeatherCard.css";
import sunny from "../../assets/images/day/sunny.png";
// import { filterWeatherData } from "../../utils/weatherApi";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img src={sunny} alt="sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;

//how to research props to react component
//send the data as prop"weatherData" to weatherCard.jsx
//weatherData call it that and pass it
