import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

// import sunny from "../../assets/images/day/sunny.png";

const WeatherCard = ({ weatherData }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  // console.log(filteredOptions[0]?.url, weatherData);
  // since weatherOption is a array with ONE element not an option, need the 0th element
  const weatherOptionUrl = filteredOptions[0]?.url;
  // quesiton mark is for optional chaining at 14min10sec of video 14
  const weatherOptionCondition = filteredOptions[0]?.condition;
  const weatherOptionDay = filteredOptions[0]?.isDay;

  return (
    <section className="weather-card">
      <div className="weather-card__temp">
        {/* {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        {currentTemperatureUnit} ternanry operator */}
        {weatherData.temp[currentTemperatureUnit]}° {currentTemperatureUnit}
        {/* bracket notation ^^^ */}
      </div>
      <img
        src={weatherOptionUrl}
        alt={`Card showing ${weatherOptionDay} ${weatherOptionCondition}weather`}
        className="weather-card__image"
      />
    </section>
  );
};

export default WeatherCard;

//how to research props to react component Jan27
//send the data as prop"weatherData" to weatherCard.jsx Jan27
//weatherData call it that and pass it Jan27
// Feb4 2am and 6:27 and 7am Part14 video
